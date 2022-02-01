import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";

interface Category {
  _id: string,
  id: string,
  name: string,
  image: string,
  since: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor
  (
    private http: LocalService
  ) {
  }

  ngOnInit(): void {
    this.http.getAllCategories().subscribe(
      response => {
        if (response.condition) {
          this.categories = response.data;
        }
      },
      error => {
        console.log(error)
      }
    )
  }

}
