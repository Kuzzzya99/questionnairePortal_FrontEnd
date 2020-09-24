import {Injectable, NgZone} from "@angular/core";
import {environment} from "../../../environments/environment";
// import * as autobahn from "autobahn";
@Injectable({
  providedIn: 'root'
})
export class AutobahnService {
  constructor(private ngZone: NgZone) {
  }

  Autobahn() {
    try {
      console.log('we are in try block');
      var autobahn = require('autobahn/index.js');
    } catch (e) {
      console.log(e);
      console.log('we are in catch block');
    }
    console.log(autobahn);
    var connection = new autobahn.Connection(
      {
        url: `${environment.ws}`,
        realm: 'realm1'
      }
    )

    this.ngZone.run(() => {
      connection.onOpen = () => {
        console.log('autobahn on open');
        const onEvent = (args) => {
          console.log(args);
        }
      };
      connection.open();

    })

  }

  // connect() {
  //   var socket = new SockJS('/gs-guide-websocket');
  //   stompClient = Stomp.over(socket);
  //   stompClient.connect({}, function (frame) {
  //     setConnected(true);
  //     console.log('Connected: ' + frame);
  //     stompClient.subscribe('/topic/greetings', function (greeting) {
  //       showGreeting(JSON.parse(greeting.body).content);
  //     });
  //   });
  // }
  // function disconnect() {
  //   if (stompClient !== null) {
  //     stompClient.disconnect();
  //   }
  //   setConnected(false);
  //   console.log("Disconnected");
  // }

}

