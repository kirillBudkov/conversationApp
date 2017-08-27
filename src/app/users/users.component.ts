import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [ServicesService]
})
export class UsersComponent implements OnInit {
	users;
  desctop;
  @Input() authorize;
  constructor(private us: ServicesService) { }

  ngOnInit() {
this.us.getUsers()
      .then( res => {
        this.users = res.json();
      } )
      .catch( error => {
        console.log( error );
      } )

// //this.desctop[0].style.height=document.body.clientHeight
// console.log(document.body.offsetHeight)
  }

}
