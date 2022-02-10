import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})
export class AdminGalleryComponent implements OnInit {
  galleries: any;

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.localService.getAdminGalleries().subscribe(
      response => {
        if (response.condition) {
          this.galleries = response.data
          console.log(this.galleries)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  copyImage(name: string) {
    let imageLink = `localhost:3000/${name}`
    let input = document.createElement('input')
    input.value = imageLink
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }

}
