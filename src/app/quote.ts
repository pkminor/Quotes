export class Quote {

  //createDate:Date; //new Date() gives back a datetime.
  likes:number;
  dislikes:number;

  constructor
  ( public id:number,
    public author:string,
    public user:string,
    public content:string,
    public createDate:Date,
    public isDefault:boolean)
  { this.likes=0; this.dislikes=0;}

}
