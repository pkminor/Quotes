import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1,"Barack Obama","username", "Yes we can.",new Date("2019-08-08")),
    new Quote(2,"Lupita Nyong'o","username", "Dreams are valid.",new Date("2019-10-26")),
    new Quote(3,"Eliud Kipchoge","username", "No human is limited.",new Date("2019-10-26 23:57:00")),
    new Quote(4,"George Saitoti","username", "There comes a time when the nation is more important than one individual.",new Date("2002-03-18")),
    new Quote(5,"Albert Einstein","username", "Everything should be made as simple as possible, but not simpler.",new Date())
   ];

   addNewQuote(quote){
      quote.createDate=new Date();
      quote.id=this.quotes.length+1;
      this.quotes.push(quote);

      quote.author="";
      quote.user="";
      quote.content="";
    }

   addVote(likeQuote,index:number){

     (likeQuote) ?
     this.quotes[index].likes +=1 :
     this.quotes[index].dislikes += (index>4)? 1 : 0;

     this.quotes.sort((left,right):number=>{ return (left.likes>right.likes)? -1:1; })
   }

   deleteQuote(deleteQuoteEvent,index :number){ if(index>4) this.quotes.splice(index,1);}

  constructor() { }

  ngOnInit() {
  }

}
