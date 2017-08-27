import { Component } from '@angular/core';
import {aUser} from './authorizeUser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [aUser]
})
export class AppComponent {
	constructor(private authUser: aUser) {}

authorize = this.authUser.getAuthorized()

someid;
onActivate($event) {

this.someid=$event.id;

}
}
