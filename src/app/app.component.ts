import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'prz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
    addRemoveContainer = false;
    // public events = [];
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    addContainer() {
        this.addRemoveContainer = true;
    }
    removeContainer() {
        this.addRemoveContainer = false;
    }

    ngOnDestroy(): void {
        // this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
