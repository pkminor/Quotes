export class Quote {

  createDate:Date; //new Date() gives back a datetime.
  likes:number;
  dislikes:number;

  constructor
  (public author:string,public user:string,public content:string)
  {this.createDate=new Date(); this.likes=0; this.dislikes=0;}

}
