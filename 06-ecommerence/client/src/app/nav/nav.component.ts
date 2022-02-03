import {Component, OnInit} from '@angular/core';
import {LocalService} from "../../services/local.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean | undefined;

  constructor(private localService: LocalService) {
  }

  ngOnInit(): void {
    this.localService.isLoggedIn.subscribe(
      state => {
        this.isLoggedIn = state;
      }
    )
  }

}
