import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LocalService} from "../../services/local.service";

interface Product {
  cat_id: number,
  description: string,
  name: string,
  price: number,
  image: string | undefined
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number | undefined;
  products: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private localService: LocalService) {
    this.id = activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    if (this.id) {
      this.localService.getProuctByCatId(this.id).subscribe(
        products => {
          if (products.condition) {
            this.products = products.data;
          }
        },
        error => {
          console.log(error)
        })
    }
  }

}
