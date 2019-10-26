import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-delete',
  templateUrl: './quote-delete.component.html',
  styleUrls: ['./quote-delete.component.css']
})
export class QuoteDeleteComponent implements OnInit {

   @Output() deleteQuoteEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  deleteQuote(deleteQuote:boolean){this.deleteQuoteEvent.emit(deleteQuote);}


}
