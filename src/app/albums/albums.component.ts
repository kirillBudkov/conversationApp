import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.sass'],
  providers: [ServicesService]
})
export class AlbumsComponent implements OnInit {
albums;	
albumTitle: string;
view=false;
view1 : boolean;
id : number;
  constructor(private ss: ServicesService,
              private aRouter: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
  	  this.getSome();
  };

onActivate($event) {
  this.view1=true
}

getSome(){
    this.aRouter.params.subscribe( params => {
        this.id = params['id']       
        this.ss.getAlbums( this.id )
       .then( res => {
        this.albums = res.json()   
        });
   })
} 

}
