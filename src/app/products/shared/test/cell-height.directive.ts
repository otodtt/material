import { Directive, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { MatchCellHeightService } from './cell-height.service';

@Directive({
  selector: '[przMatchCellHeight]'
})
export class MatchCellHeightDirective implements AfterViewInit {
  @Input() matchCellHeight: any;
  constructor(private el: ElementRef, private matchHeightService: MatchCellHeightService) {

  }

@HostListener('window:resize', ['$event'])
onResize(event) {
  this.updateHeight();
}

ngAfterViewInit() {
    this.updateHeight();
  }

  updateHeight() {

      /* store the ref of this element in the matchheight service with the book information */
      this.matchHeightService.cells.push({el: this.el, data: this.matchCellHeight});
      this.matchHeightService.matchHeight();
  }
}
