import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, Input, Output } from '@angular/core';
import * as Cropper from 'cropperjs';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
    selector: 'cui-modal-cropper',
    templateUrl: './modal-image-cropper.component.html',
    styleUrls: ['./modal-image-cropper.component.scss']
})
export class ModalImageCropperComponent {

    private cropper: Cropper;
    imageUrl: any = "";
    @Input() options: any;
    @Input() title: string = '图片裁剪';
    @Input() cropText: string = '裁剪';
    @Input() maskClosable: boolean = false;
    // 上传接口地址
    @Input() uploadUrl;
    @Input() uploadParamName = 'file';
    // 回传结果中表示期望获取数据的属性名
    @Input() property = "relativePath";
    @Input() modalWidth: number = 740;
    @Input() modalHeight: number = 480;
    // 裁剪后的结果，可以是base64格式的图片数据或者是服务器返回文件路径
    @Output() result: any;
    currentModal;

    constructor(private modalService: NzModalService, private http: HttpClient) { }

    showModalForTemplate(contentTpl, footerTpl) {
        this.currentModal = this.modalService.create({
            nzTitle: this.title,
            nzContent: contentTpl,
            nzFooter: footerTpl,
            nzWidth: this.modalWidth,
            nzWrapClassName: 'vertical-center-modal',
            nzOnOk() {
            },
            nzOnCancel() {
                console.log('Click cancel');
            },
            nzMaskClosable: false
        });
        console.log(this.currentModal);
    }

    crop(event) {
        if (this.uploadUrl && this.property) {
            this.cropper.getCroppedCanvas().toBlob((blob) => {
                let formData = new FormData();
                formData.append(this.uploadParamName, blob, 'croped.png');
                this.http.post(this.uploadUrl, formData)
                .subscribe((r: any) => {
                    console.log(r);
                    this.result = r[this.property];
                    console.log(this.result);
                });
              });
        } else {
            let url = this.cropper.getCroppedCanvas({
                maxWidth: 2048,
                maxHeight: 1152,
                fillColor: '#fff',
                imageSmoothingEnabled: false,
                imageSmoothingQuality: 'high',
            }).toDataURL();
            this.result = url;
        }
        setTimeout(() => {
            /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
            this.currentModal.destroy();
            this.currentModal = null;
            this.imageUrl = "";
        }, 500);
    }
    handleOk = (e) => {
        setTimeout(() => {
            /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
            this.currentModal.destroy();
            this.currentModal = null;
            this.imageUrl = "";
        }, 500);
    }
    handleCancel = (e) => {
        setTimeout(() => {
            /* destroy方法可以传入onOk或者onCancel。默认是onCancel */
            this.currentModal.destroy();
            this.currentModal = null;
            this.imageUrl = "";
        }, 500);
    }

    getCropper(event) {
        this.cropper = event;
    }

    read(files) {
        return new Promise<string>((resolve, reject) => {
            if (!files || files.length === 0) {
                resolve('');
                return;
            }
            const file = files[0];
            // Strict image type whitelist for security
            const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
            if (validImageTypes.includes(file.type)) {
                const reader = new FileReader();
                reader.onerror = () => {
                    reader.abort();
                    reject(new Error(`Failed to read file: ${file.name || 'unknown'}`));
                };
                reader.onabort = () => {
                    reject(new Error(`File reading aborted: ${file.name || 'unknown'}`));
                };
                reader.onload = () => {
                    const result = reader.result as string;
                    this.imageUrl = result;
                    resolve(result);
                };
                reader.readAsDataURL(file);
            } else {
                reject(new Error(`Please choose a valid image file (JPEG, PNG, GIF, WebP, or SVG). Got: ${file.type || 'unknown type'} (${file.name || 'unknown'})`));
            }
        });
    }
    selectImage(event) {
        this.read(event.target.files).then(() => {
            event.target.value = '';
        }).catch((e) => {
            event.target.value = '';
        });
    }
}
