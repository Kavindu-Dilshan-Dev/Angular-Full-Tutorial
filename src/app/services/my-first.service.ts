import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  feedbacks: Array<any> = [];
  
  constructor() { 
    
    this.init();
  }

  init():void{

    this.insert(({
      name: "Kavindu",
      email: "kavindu5654@gmail.com",
      message: "Hello Kavindu"
    }));

    this.insert(({
      name: "Dilshan",
      email: "dilshan@gmail.com",
      message: "Hello Dilshan"
    }));

    this.insert(({
      name: "Pasindu",
      email: "pasindu@gmail.com",
      message: "Hello Pasindu"
    }));

  }

  insert(feedback: {name: string, email: string, message: string}):void{
      this.feedbacks.push(feedback);
  }

  getAllFeedBacks(): any[]{
    return this.feedbacks;
  }

  deleteFeedback(index: number):void{
    this.feedbacks.splice(index,1);
  }

}
