import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: { text: string, timestamp: string }[] = [];

  constructor(private localStorageService: ChatService) {}

  ngOnInit() {
    const storedMessages = this.localStorageService.getItem('chatMessages');
    if (storedMessages) {
      this.messages = JSON.parse(storedMessages);
    }

  }

  sendMessage(newMessage: string) {
    if (newMessage.trim() !== '') {
      const timestamp = this.getCurrentTime();
      this.messages.push({ text: newMessage, timestamp });
      this.localStorageService.setItem('chatMessages', JSON.stringify(this.messages));
    }
  }

 

  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
}
