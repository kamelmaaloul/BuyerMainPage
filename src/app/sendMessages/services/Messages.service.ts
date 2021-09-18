import { Injectable } from '@angular/core';
import { info_send_and_recive } from './info_send_and_recive';
import { ALL_Messages_Data } from './messageData';
import { messages } from './messages';

@Injectable({
  providedIn: 'root'
})
export class serviceprofiles {

  constructor() { }
  getInformations(): messages[]{
    return ALL_Messages_Data;
  }
  getMessages(name_recive: string):any  {
    return this.getInformations().find(message => message.name_recive == name_recive);
  }
}