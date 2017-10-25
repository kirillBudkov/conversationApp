import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.sass'],
    providers: [ServicesService]
})

export class CommentsComponent implements OnInit {
	comments;	
	@Input() set postId(id) {
		if(id) {
			this.ss.getComments(id ).then( res => {
        		this.comments = res.json();
    		});
		}
	};

	constructor(private ss: ServicesService) { }
	ngOnInit() {}
}
