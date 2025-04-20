import { CommonModule } from '@angular/common';
import { Component, inject, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Feedback } from '../model/Feedback';
import { MessageDetailsComponent } from "../message-details/message-details.component";
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-my-first-comp',
  imports: [CommonModule, FormsModule, MessageDetailsComponent],
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css'
})
export class MyFirstCompComponent {
  
  isSubmited: boolean = false;
  
  feedBacks: Array<Feedback> = [];

  feedBack: Feedback = new Feedback('','','');
  

  constructor(
    private service: MyFirstService 
  ){
    this.feedBacks = this.service.getAllFeedBacks();
    this.isSubmited = this.feedBacks.length > 0;
  }
  
  
  onSubmit():void {
    this.isSubmited = true;
    this.service.insert({
      'name': this.feedBack.name,
      'email': this.feedBack.email,
      'message': this.feedBack.message
    });
    
    //  console.log(this.feedBacks);
    
  }

  deleteMessage(index: number):void{
    this.service.deleteFeedback(index);
  }

}
