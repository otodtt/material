import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import pages from '../Pages';
import { MenuButtonAnimation } from './animations';

@Component({
    selector: 'prz-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    animations: [MenuButtonAnimation]
})
export class SideNavComponent implements OnInit {
    state = 'default';




    public pages = pages;
    public fillerShow = null;

    @Output() navClose = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
    }

    showFiller(index: number) {
        if (this.fillerShow === index) {
            this.fillerShow = null;
        } else {
            this.fillerShow = index;
        }
        // console.log(event);
    }

    onCloseMenu() {
        this.navClose.emit(false);
    }

    rotate(index) {
        this.state = (this.state === 'default' ? 'rotated' : 'default');
        // setTimeout(() => {
        //     this.showFiller(index);
        // }, 500);
    }
    animationDone(event, index) {
        console.log(index);
    }

}
