import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Cart} from "../helper/Cart";

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {
  products: any;
  response: any;
  loadMe = false

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.paginate(1)
  }

  nextPage() {
    if (this.response.hasNextPage) {
      this.paginate(this.response.nextPage)
    }
  }

  prevPage() {
    if (this.response.hasPrevPage) {
      this.paginate(this.response.prevPage)
    }
  }

  paginate(start: number) {
    this.loadMe = true
    this.localService.getPaginatePosts(start, 30).subscribe(
      (next: any) => {
        if (next.condition) {
          this.loadMe = false
          this.products = next.data.docs;
          this.response = next.data;
        } else {
          console.log(next.message)
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  addToCart(product: any) {
    Cart.addToCart(product)
    this.localService.changeCart(true)
  }


}
