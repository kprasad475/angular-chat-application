import { Component } from '@angular/core';

interface ChatMessage {
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  messages: ChatMessage[] = [];

  sendMessage(messageText: string) {
    const message: ChatMessage = {
      text: messageText,
      timestamp: new Date().toLocaleTimeString()
    };
    this.messages.push(message);
  }
}
