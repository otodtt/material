import { Component, OnInit } from '@angular/core';

import pages from './Pages';

@Component({
  selector: 'prz-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public pages = pages;

  constructor() { }

  ngOnInit() {
  }

}
