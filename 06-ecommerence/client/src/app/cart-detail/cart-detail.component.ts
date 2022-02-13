import {Component, OnInit} from '@angular/core';
import {Cart} from "../helper/Cart";
import {LocalService} from "../../services/local.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  products: any;
  grandTotal = 0;

  constructor(private localService: LocalService, private router: Router) {
  }

  ngOnInit(): void {
    this.products = Cart.getAllProducts();
    this.products.forEach((product: any) => {
      this.grandTotal += product.price * product.count;
    })
  }

  increase(product: any, type: number) {
    Cart.increase(product, type)
    this.ngOnInit()
  }

  checkOut() {
    const order: any = {}
    this.products.forEach((product: any) => {
      const key = product._id
      order[key] = product.count
    })

    const formData = new FormData();
    formData.append('uid', '61f2a1d6778513a6c186fb18')
    formData.append('ords', JSON.stringify(order))
    this.localService.checkOutOrder(formData).subscribe(
      response => {
        if (response.condition) {
          Cart.reset()
          this.router.navigate(['/'])
        }
      },
      error => {
        console.log(error)
      }
    )

  }

  removeProduct(product: any) {
    Cart.remove(product)
    this.ngOnInit()
  }

}
