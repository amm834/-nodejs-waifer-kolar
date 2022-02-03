import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  template: `
    <router-outlet></router-outlet>`
})
export class AdminPanelComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
