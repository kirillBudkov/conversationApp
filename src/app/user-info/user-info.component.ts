import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass'],
  providers: [ServicesService]
})
export class UserInfoComponent implements OnInit {
id;	
user;
  constructor(private router: ActivatedRoute,
  			   private ss: ServicesService) { }

  ngOnInit() {	
  	this.getId();
  }
  getId(){
    this.router.params.subscribe( params => {
        this.id = params['id']       
        this.ss.getUser( this.id )
       .then( res => {
        this.user = res.json();
                     });
   })
}
}
