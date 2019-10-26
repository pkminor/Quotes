import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote("Albert Einstein","username",
    "Everything should be made as simple as possible, but not simpler"),
    new Quote("Albert Einstein","username",
    "Everything should be made as simple as possible, but not simpler")

   ];

   addNewQuote(quote){ this.quotes.push(quote); }

   addVote(likeQuote,index:number){

     (likeQuote) ?
     this.quotes[index].likes +=1 :
     this.quotes[index].dislikes +=1;
   }

  constructor() { }

  ngOnInit() {
  }

}
