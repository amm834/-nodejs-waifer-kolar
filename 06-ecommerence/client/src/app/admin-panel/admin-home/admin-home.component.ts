import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../../services/local.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.localService.getAllAdminCats().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

  getAllCat() {

  }

}
