import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ModalImageCropperComponent } from './modal-image-cropper/modal-image-cropper.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@NgModule({
    imports: [CommonModule, NzButtonModule],
    exports: [ImageCropperComponent, ModalImageCropperComponent],
    declarations: [ImageCropperComponent, ModalImageCropperComponent],
    providers: [],
})
export class CropperModule { }
