import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LocalService} from "../../../services/local.service";
import {Storage} from "../../helper/Storage";
import {Auth} from "../../helper/Auth";

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

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    console.log(Auth.check())
  }

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  login(data: FormData) {
    this.localService.loginNow(data).subscribe(
      response => {
        if (response.condition) {
          Storage.token = response.token;
          this.localService.changeAuthState(true)
        }
      },
      error => {
        console.log(error)
      }
    )
  }
}
