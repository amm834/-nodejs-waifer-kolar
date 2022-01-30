import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: LocalService) {
  }

  ngOnInit(): void {
    this.http.getAllCategories().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }

}
