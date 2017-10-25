import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';
import {aUser} from '../authorizeUser'

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.sass'],
    providers: [ServicesService]
})
export class UsersComponent implements OnInit {
    users;
    authorizeId : number;
    constructor ( private us: ServicesService,
                  private authUser: aUser) { }

    ngOnInit() {
        this.us.getUsers()
            .then( res => {
                this.users = res.json();
            })
            .catch( error => {
            console.log( error );
            })
        this.authorizeId=this.authUser.getAuthorized().userId;    
    }
}
