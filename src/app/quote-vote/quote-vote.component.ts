import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  @Input() likes:number;
  @Input() dislikes:number;
  @Output() voteQuoteEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  vote(likeQuote:boolean){ this.voteQuoteEvent.emit(likeQuote); }

}
