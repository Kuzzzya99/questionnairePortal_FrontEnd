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

}
