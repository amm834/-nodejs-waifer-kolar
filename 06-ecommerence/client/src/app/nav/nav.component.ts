import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Auth} from "../helper/Auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean | undefined;

  constructor(private localService: LocalService, private router: Router) {
  }

  ngOnInit(): void {
    this.localService.isLoggedIn.subscribe(
      state => {
        this.isLoggedIn = state;
      }
    )
  }

  logout() {
    Auth.logout()
    this.localService.changeAuthState(false)
    this.router.navigate(['/'])
  }

}
