import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
      name: new FormControl('', [
        Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }
  )

  constructor() {
  }

  ngOnInit(): void {
  }

  startRegister(data: FormData) {
    console.log(data)
  }

  get name() {
    return this.form.get('name')
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

}
