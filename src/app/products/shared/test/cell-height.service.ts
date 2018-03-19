import {Injectable, ElementRef} from '@angular/core';

@Injectable()
export class MatchCellHeightService {
  cells: { el: ElementRef, data: any}[] = [];
  constructor() {

  }

  findUniqueBooks(): any[] {
    return this.cells.map(currCell => currCell.data).reduce(
      (acc, curr) => {
        if (acc) {
          if (acc.indexOf(curr) === -1) {
            acc.push(curr);
          }
        } else {
          acc = [].push(curr);
        }
        return acc;
      }, []
    );
  }

  matchHeight() {
    /* first find all the unique books*/
    const books = this.findUniqueBooks();


    for (let i = 0; i < books.length ; i++) {
    const currbook = books[i];

      /*for each book find cells that containins this book object info
        (in this demo each row is containng info about one book there for we are using book object
        to identify cells of each row)
      */
     const bookCells: {el: ElementRef, data: any}[] = [];

        for (let j = 0; j < this.cells.length ; j++) {
            const currCell = this.cells[j];
          if (currCell.data === currbook) {
            bookCells.push(currCell);
          }
        }

        /*once we have the array of cells which are of same row apply the match height logic*/
        bookCells.forEach(val => val.el.nativeElement.style.height = 'initial');
        const maxHeight = Math.max(...bookCells.map(val => val.el.nativeElement.offsetHeight));
        bookCells.forEach(currCell => {
          currCell.el.nativeElement.style.height = maxHeight + 'px';
        });
    }
  }
}
