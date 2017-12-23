import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import pages from '../Pages';
import { MenuButtonAnimation } from './animations';

@Component({
    selector: 'prz-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    animations: [ MenuButtonAnimation ]
})
export class SideNavComponent implements OnInit {
    public state = 'default';
    public stateSub = 'default-sub';

    // public return = 'return-default';
    // public returnMenu = '';
    // public returnSub = 'default-sub';
    public isClicked = false;

    // public done: number;
    // public id: number;




    public pages = pages;
    public subPages: any;
    public fillerShow = null;

    @Output() navClose = new EventEmitter<boolean>();
    constructor() { }

    ngOnInit() {
        // console.log(this.return);
    }

    // showFiller(index: number) {
    //     if (this.fillerShow === index) {
    //         this.fillerShow = null;
    //     } else {
    //         this.fillerShow = index;
    //     }
    //     // console.log(event);
    // }

    onCloseMenu() {
        this.navClose.emit(false);
    }

    rotate(index?) {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        // this.returnSub = 'default-sub';
        this.isClicked = true;
        this.subPages = this.pages[index].subPage;
        // console.log(this.returnMenu + ' ---> up <---- ' + this.state);
        // console.log(this.stateSub + ' ---> up <---- ' );
    }

    returnDefaultMenu() {
        this.state = (this.state === 'default' ? 'hidden' : 'default');
        this.stateSub = (this.stateSub === 'default-sub' ? 'shown' : 'default-sub');
        // this.returnMenu = (this.returnMenu === 'return-default' ? 'hide' : 'return-default');
        // this.returnSub = (this.returnSub === 'default-sub' ? 'hide' : 'default-sub');
        // this.state = 'default';
        this.isClicked = false;
        // console.log(this.returnMenu + ' ---> down <---- ' + this.state);
        // console.log(this.returnSub + ' ---> down <---- ');
    }
    animationDone(event, index) {
        // this.done = 1;
        // console.log('done');
    }

}
