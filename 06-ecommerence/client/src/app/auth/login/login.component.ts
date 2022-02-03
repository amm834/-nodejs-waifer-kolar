import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ]))
  })

  constructor() {
  }

  ngOnInit(): void {

  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  login(data: FormData) {
    console.log(data)
  }
}
