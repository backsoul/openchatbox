import { Component } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: { class: 'styleMessage' },
})
export class HomeComponent {
  constructor() {}
  ngOnInit() {
    var socket = new WebSocket('ws://irc-ws.chat.twitch.tv:80');
    socket.onopen = function (connection) {
      let username = localStorage.getItem('usernameTwitch');
      let key = localStorage.getItem('keyTwitch');
      var pass = 'PASS ' + key;
      var user = 'NICK ' + username;
      var join = 'JOIN ' + username;
      socket.send(pass);
      socket.send(user);
      socket.send(join);
    };
    socket.onmessage = function (event: any) {
      let messages: any = document.getElementById('listMessages');
      let username = localStorage.getItem('usernameTwitch');
      if (
        event.data.includes(
          `:${username}!${username}@${username}.tmi.twitch.tv PRIVMSG #`
        )
      ) {
        let message: any = String(
          event.data.split(
            `:${username}!${username}@${username}.tmi.twitch.tv PRIVMSG #`
          )[1]
        );
        var messageElement = document.createElement('li');
        messageElement.className = 'styleMessage';
        messageElement.id = 'styleMessageCustom';
        messageElement.appendChild(document.createTextNode(message));
        messages.appendChild(messageElement);
        messages.scrollBy(0, 25);
      }
    };
    this.applyStyle();
  }

  applyStyle() {
    var customStyle: any = document.getElementById('customStylelistMessages');
    var listMessagesCustom: any = document.getElementById('listMessages');
    var customTextStyle: any = document.querySelectorAll(
      '[id=styleMessageCustom]'
    );
    var customStyleCustom: any = document.getElementById('customStyleText');
    listMessagesCustom.style.cssText = customStyle.value;
    customStyle.onkeypress = function () {};
    customTextStyle.forEach((element: any) => {
      element.style.cssText = customStyleCustom.value;
    });
  }
}
