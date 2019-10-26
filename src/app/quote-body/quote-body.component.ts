import { Component, OnInit,Input } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-quote-body',
  templateUrl: './quote-body.component.html',
  styleUrls: ['./quote-body.component.css']
})
export class QuoteBodyComponent implements OnInit {
  @Input() quote:Quote;
  constructor() { }

  ngOnInit() {
  }

}
