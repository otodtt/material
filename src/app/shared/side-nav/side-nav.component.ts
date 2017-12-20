import { Component, OnInit } from '@angular/core';

import pages from '../Pages';

@Component({
  selector: 'prz-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public pages = pages;

  constructor() { }

  ngOnInit() {
  }

}
