import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {

constructor(private router: ActivatedRoute) {  };
    userId: number;  
    back: boolean=false;
    @Input() authorize;
    @Input() set someid(id) {
	    if(id) {
            this.back=true; 
            this.userId=id
        }
		else {
            this.back=false
        }
	};

    myProfile() {
        this.userId=this.authorize.userId
    };
    ngOnInit() {};
}