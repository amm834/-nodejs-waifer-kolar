import {Component, OnInit} from '@angular/core';
import {Cart} from "../helper/Cart";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  products: any;

  constructor() {
  }

  ngOnInit(): void {
    this.products = Cart.getAllProducts();
  }

}
