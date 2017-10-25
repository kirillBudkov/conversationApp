import { Component, OnInit, Input, Output,
         EventEmitter, ViewChild, AfterViewChecked } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import { ElementRef } from '@angular/core';


@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.sass'],
    providers: [ServicesService]
})
export class AlbumsComponent implements OnInit, AfterViewChecked {
    @ViewChild("albumsContainer")
    albumsContainer : any;
    albums;	
    varAlbumsContainer;
    varAlbumsList;
    varAlbumContainer;
    varAlbumContainerNum;
    varAlbumContainerLCH;
    varAlbumContainerFCH;
    styles;
    width;
    next;
    prev;
    view1 : boolean;
    id : number;
    constructor ( private ss: ServicesService,
                  private router: ActivatedRoute,
                ) {}
              
    ngOnInit() {
        this.getSome();  
    };

    ngAfterViewChecked() {
        if(this.albumsContainer) {
            this.varAlbumsContainer=document.querySelector(".albumsContainer");
            this.varAlbumsList=document.querySelector(".albumsList");
            this.varAlbumContainer=document.querySelectorAll(".albumContainer");
            this.varAlbumContainerNum=this.varAlbumContainer.length;
            this.varAlbumContainerFCH=document.querySelector(".albumContainer:first-child");
            this.varAlbumContainerLCH=document.querySelector(".albumContainer:last-child");
            this.next=document.querySelector("#nextSlide");
            this.prev=document.querySelector("#prevSlide");
            this.styles=getComputedStyle(this.varAlbumsContainer);
            this.width=parseInt(this.styles.width);
            this.varAlbumsList.style.width=this.varAlbumContainerNum*this.width+'px';
           // console.log(this.albumsContainer.nativeElement.children[0].children[0])
        }
    }
    onActivate($event) {
        this.view1=true
    };

    takeNext(){
        this.varAlbumsList.insertBefore(this.varAlbumContainerLCH, this.varAlbumContainerFCH);
        this.varAlbumsList.style.cssText="transform: translateX(this.width+'px')"  
    }

    takePrev(){
        this.varAlbumsList.appendChild(this.varAlbumContainerFCH)
    }

    getSome(){
        this.router.params.subscribe( params => {
            this.id = params['id']       
            this.ss.getAlbums( this.id )
           .then( res => {
                this.albums = res.json()   
            });
    })
    } 
}
