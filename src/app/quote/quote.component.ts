import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote("Obama","username", "Yes we can."),
    new Quote("Lupita Nyong'o","username", "Dreams are valid."),
    new Quote("Eliud Kipchoge","username", "No human is limited."),
    new Quote("Albert Einstein","username", "Everything should be made as simple as possible, but not simpler.")

   ];

   addNewQuote(quote){ this.quotes.push(quote); }

   addVote(likeQuote,index:number){

     (likeQuote) ?
     this.quotes[index].likes +=1 :
     this.quotes[index].dislikes += (index>3)? 1 : 0;
   }

  constructor() { }

  ngOnInit() {
  }

}
