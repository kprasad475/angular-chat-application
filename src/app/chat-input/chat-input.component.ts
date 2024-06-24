import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  message:string='';
  @Output() sendMessage =  new EventEmitter<string>();

  onSend(){
    if(this.message.trim()){
      this.sendMessage.emit(this.message);
      this.message = ''
    }
  }

}
