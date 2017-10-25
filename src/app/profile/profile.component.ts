import { Component, OnInit, Input} from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {aUser} from '../authorizeUser'


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.sass'],
    providers: [ServicesService, aUser]
})

export class ProfileComponent implements OnInit {
    user;
    id;
    constructor ( private ss: ServicesService,
                  private router: ActivatedRoute,
                  private authUser: aUser 	   
                ) {};

    ngOnInit() {
        this.getId();
    };

    getId(){
        this.router.params.subscribe( params => {
            this.id = params['id'], 
            this.ss.getUser( this.id )
                .then( res => {
                    this.user = res.json();
                });
        })
    }
}
