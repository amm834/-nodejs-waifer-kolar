import {Component, OnInit} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-gallery-create',
  templateUrl: './gallery-create.component.html',
  styleUrls: ['./gallery-create.component.css']
})
export class GalleryCreateComponent implements OnInit {
  imageChangedEvent: any = ''
  croppedImage: any = ''

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {

  }

  cropperReady() {

  }

  loadImageFailed() {

  }

  uploadImage() {
    const formData: FormData = new FormData()
    const file = this.dataURLToFile(this.croppedImage, this.imageChangedEvent.target.files[0].name)
    formData.append('image', file, file.name)

    this.localService.uploadImage(formData).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  dataURLToFile(dataurl: any, filename: string) {
    // @ts-ignore
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, {type: mime})
  }


}
