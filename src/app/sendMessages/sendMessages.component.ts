import { Component, OnInit } from '@angular/core';
import { info_send_and_recive } from './services/info_send_and_recive';
import { ALL_Messages_Data } from './services/messageData';
import { messages } from './services/messages';
import { serviceprofiles } from './services/Messages.service';

@Component({
  selector: 'app-rrr',
  templateUrl: './sendMessages.component.html',
  styleUrls: ['./sendMessages.component.css']
})
export class RrrComponent implements OnInit {

  allMessages:messages[];
  messages!:Array<info_send_and_recive>;
  to!:string;
  constructor(public Serviceprofiles:serviceprofiles) { this.allMessages=Serviceprofiles.getInformations();
    this.to="omar";
    this.getMessages();
  }
  //samir
  show_Messages(to:string){
    this.to=to;
    this.getMessages();
  }
  getMessages(){//messages_one_to_one:string){
    this.messages=this.Serviceprofiles.getMessages(this.to).messages;
  }
  sendMessage(message:string){
    if(message){
      this.getMessages();
      this.messages.push({sender:"my_account",message:message});
    }
  }
  ngOnInit(): void {
  }


}
