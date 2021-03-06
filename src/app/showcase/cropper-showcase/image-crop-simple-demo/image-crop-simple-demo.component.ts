import { Component, OnInit, Input } from '@angular/core';
import * as Cropper from "cropperjs";

@Component({
  selector: 'cui-image-crop-simple-demo',
  templateUrl: './image-crop-simple-demo.component.html',
  styleUrls: ['./image-crop-simple-demo.component.scss']
})
export class ImageCropSimpleDemoComponent implements OnInit {

  URL = window.URL;
  private cropper: Cropper;
  imageUrl: any;
  download = document.getElementById('download');
  actions = document.getElementById('actions');
  dataX: number;
  dataY: number;
  putDate;
  dataHeight: number;
  dataWidth: number;
  dataRotate: string;
  dataScaleX: string;
  dataScaleY: string;
  options: any = {
    aspectRatio: 321 / 180,
    preview: '.img-preview',
    ready: (e) => {
      console.log(e.type);
    },
    cropstart: (e) => {
      console.log(e.type, e.detail.action);
    },
    cropmove: (e) => {
      console.log(e.type, e.detail.action);
    },
    cropend: (e) => {
      console.log(e.type, e.detail.action);
    },
    crop: (e) => {
      let data = e.detail;
      this.dataX = Math.round(data.x);
      this.dataY = Math.round(data.y);
      this.dataHeight = Math.round(data.height);
      this.dataWidth = Math.round(data.width);
      this.dataRotate = typeof data.rotate !== 'undefined' ? data.rotate : '';
      this.dataScaleX = typeof data.scaleX !== 'undefined' ? data.scaleX : '';
      this.dataScaleY = typeof data.scaleY !== 'undefined' ? data.scaleY : '';
    },
    zoom: function (e) {
      console.log(e.type, e.detail.ratio);
    }
  };

  origin(event) {
    this.cropper = event;
  }
  constructor() { }

  ngOnInit() {
  }

  cropImage() {
    let url = this.cropper.getCroppedCanvas({
      maxWidth: 4096,
      maxHeight: 4096,
      fillColor: '#fff',
      imageSmoothingEnabled: false,
      imageSmoothingQuality: 'high',
    }).toDataURL();
    console.log(url);
    this.imageUrl = url;
  }
  setDragMode(mode) {
    this.cropper.setDragMode(mode);
  }

  zoom(ratio) {
    this.cropper.zoom(ratio);
  }
  zoomTo(ratio) {
    this.cropper.zoomTo(ratio);
  }

  move(x, y?) {
    this.cropper.move(x, y);
  }
  moveTo(x, y?) {
    this.cropper.move(x, y);
  }

  rotate(angle) {
    this.cropper.rotate(angle);
  }

  scaleX() {
    if (this.dataScaleX == '1') {
      this.cropper.scaleX(-1);
    } else {
      this.cropper.scaleX(1);
    }
  }
  scaleY() {
    if (this.dataScaleY == '1') {
      this.cropper.scaleY(-1);
    } else {
      this.cropper.scaleY(1);
    }
  }

  crop() {
    this.cropper.crop();
  }
  clear() {
    this.cropper.clear();
  }
  disable() {
    this.cropper.disable();
  }
  enable() {
    this.cropper.enable();
  }
  reset() {
    this.cropper.reset();
  }
  destroy() {
    this.cropper.destroy();
  }

  setConfig(options) {
    Cropper.setDefaults(options);
  }
  setAspectRatio(aspectRatio) {
    this.cropper.setAspectRatio(aspectRatio);
  }
  inputImage(e) {
    let files = e.target.files;
    let file;

    if (this.cropper && files && files.length) {
      file = files[0];

      if (/^image\/\w+/.test(file.type)) {
        let uploadedImageType = file.type;

        this.imageUrl = URL.createObjectURL(file);
        e.target.value = null;
      } else {
        window.alert('Please choose an image file.');
      }
    }
  }
}


