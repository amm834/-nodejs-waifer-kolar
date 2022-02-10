import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {
  products: any;

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.localService.getPaginatePosts(1, 50).subscribe(
      (next: any) => {
        if (next.condition) {
          this.products = next.data.docs;
          console.log(this.products)
        } else {
          console.log(next.message)
        }
      },
      error => {
        console.log(error)
      }
    )
  }


}
