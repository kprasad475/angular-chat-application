import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
messages:string[]=[];

sendMessage(message:string){
  this.messages.push(message)
}
}
