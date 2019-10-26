import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1,"Barack Obama","username", "Yes we can.",new Date()),
    new Quote(2,"Lupita Nyong'o","username", "Dreams are valid.",new Date()),
    new Quote(3,"Eliud Kipchoge","username", "No human is limited.",new Date()),
    new Quote(4,"Albert Einstein","username", "Everything should be made as simple as possible, but not simpler.",new Date())
   ];

   addNewQuote(quote){
      quote.createDate=new Date();
      quote.id=this.quotes.length+1;
      this.quotes.push(quote); }

   addVote(likeQuote,index:number){

     (likeQuote) ?
     this.quotes[index].likes +=1 :
     this.quotes[index].dislikes += (index>3)? 1 : 0;

     this.quotes.sort((left,right):number=>{ return (left.likes>right.likes)? -1:1; })
   }

  constructor() { }

  ngOnInit() {
  }

}
