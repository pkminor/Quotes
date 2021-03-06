import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();
  newQuote = new Quote(0,"","","",new Date(),false);
  constructor() { }

  ngOnInit() {
  }

  submitQuote(){ this.addQuote.emit(this.newQuote);  }

}
