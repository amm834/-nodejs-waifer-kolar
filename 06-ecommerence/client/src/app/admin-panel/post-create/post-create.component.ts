import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalService} from "../../../services/local.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  form = new FormGroup({
      cat_id: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required]),
      price: new FormControl('', [
        Validators.required,
      ]),
      image: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
      ])
    }
  )

  cats: any;

  constructor(private localService: LocalService, private router: Router) {
  }

  ngOnInit(): void {
    this.localService.getAllCategories().subscribe(
      res => {
        if (res.condition) {
          this.cats = res.data;
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  startPost(data: any) {
    this.localService.createProduct(data).subscribe(
      response => {
        if (response.condition) {
          alert('Product Crated Successfully')
          this.router.navigate(['/admin/post/all'])
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  get cat_id() {
    return this.form.get('cat_id')
  }

  get name() {
    return this.form.get('name')
  }

  get price() {
    return this.form.get('price')
  }

  get image() {
    return this.form.get('image')
  }

  get description() {
    return this.form.get('description')
  }

}


// { cat_id, name, price, image, description } =
