 import { Injectable } from '@angular/core';
 @Injectable()

export class aUser {
	constructor() {}

	private authorized = {
	userId : 5,
	userName : "Chelsey Dietrich"	
	}
	getAuthorized() {
		return this.authorized
	}
}