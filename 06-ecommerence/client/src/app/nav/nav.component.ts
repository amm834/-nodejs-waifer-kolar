import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";
import {Auth} from "../helper/Auth";
import {Router} from "@angular/router";
import {Cart} from "../helper/Cart";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean | undefined;
  cartCount = 0

  constructor(private localService: LocalService, private router: Router) {
  }

  ngOnInit(): void {
    this.localService.isLoggedIn.subscribe(
      state => {
        this.isLoggedIn = state;
      }
    )

    this.localService.cartChanged.subscribe(
      state => {
        this.cartCount = Cart.getAllProducts().length;
      }
    )
  }

  logout() {
    Auth.logout()
    this.localService.changeAuthState(false)
    this.router.navigate(['/'])
  }


}
