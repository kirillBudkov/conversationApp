import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';


@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.sass'],
    providers: [ServicesService]
})

export class PostComponent implements OnInit {
    @Input() post;
    @Input() postId;
    @Input() actTitle;
    @Input() defineUser;
    postbody;
    user;

  constructor(private ss: ServicesService) { }

    ngOnInit() {
        this.ss.getUser(this.post.userId)
            .then( res => {
                this.user = res.json();
            })
            .catch( error => {
                console.log( error );
            })
    }
}
