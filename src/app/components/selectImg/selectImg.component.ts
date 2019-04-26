import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetPhotosService } from '../../services/get-photos.service';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'selectImg',
  templateUrl: './selectImg.component.html',
  styleUrls: ['./selectImg.component.scss'],
})
export class SelectComponent implements OnInit {

  constructor(private GetPhotos: GetPhotosService, private camera: Camera, private androidPermissions: AndroidPermissions) {
    this.imgs = GetPhotos.getPhotos();
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Té premís?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }

  @Output() selectedImg: EventEmitter<string> = new EventEmitter();
  base64Image: any;
  img = '';
  imgs = [];
  selectImg: string;

  slideOpts = {
    effect: 'flip',
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    zoom: false,
  };

  ngOnInit() {}

  changeImg(img) {
    this.selectedImg.emit ( img );
  }
  ferFoto(){
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.changeImg(this.base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
