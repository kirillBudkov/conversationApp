import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.sass'],
    providers: [ServicesService]
})

export class NotesComponent implements OnInit {
    noteForPost;
    postSend;
    constructor(private ss: ServicesService) { }

    ngOnInit() {}

    addNote(body, title) {
        this.noteForPost={
	        title: title.value,
	        body: body.value
        };
        this.ss.sendPost( this.noteForPost )
            .then( res => {
                this.postSend = res.json();
                console.log(this.postSend)
            });
        title.value="";
        body.value="";            
    }
}
