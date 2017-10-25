import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.sass']
})

export class LikeComponent implements OnInit {
	isactive=false;
	amount;
	constructor() { }

	ngOnInit() {
		this.amount=Math.round(Math.random()*10); // fake amount of like
	};

	liked() {
		this.isactive=!this.isactive;
		if(this.isactive) {
			this.amount+=1;
		}
		else {
			this.amount-=1;	
		}
	}
}