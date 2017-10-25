import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';
import {aUser} from '../authorizeUser'

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.sass'],
    providers: [ServicesService, aUser]
})

export class PostsComponent implements OnInit {
    id : number;
    posts;
    postId : number;
    postTitle : string;
    postBody : string;
    showDetails : boolean = false;
    defineUser: boolean = false;
    prId: number;
    prTarget;
    pageItems;
    pages=[];
    currentPage=1;
    lastPage;
    itemsOnPage=10;
    usePag=true;
    noteForPost;
    postSend;
    userIdAutho;
    makeNote: boolean=false;
    createNote: boolean=false;

    constructor( private ss: ServicesService,
                 private router: ActivatedRoute,
                 private authUser: aUser) {  };

    ngOnInit() {
        this.getSome();
        this.checkAuthorization();
    };

    getSome() {
        this.router.params.subscribe( params => {
            this.id = params['id'];
            if (this.id) {
                this.defineUser=true
            };
            this.ss.getPosts( this.id )
                .then( res => {
                    this.posts = res.json();
                    this.createPaginator(this.posts)
                    this.pagination(this.posts)
                });
        })
    } 

    open ($event, someId, title, body) { 
        var  that=this;
        if($event.target.classList[0]=="title") {
            this.postId=someId;
            if (this.prId==this.postId) {
                this.showDetails = !this.showDetails
                $event.target.classList.toggle('active')
            }
            else {
                this.showDetails=true
                $event.target.classList.toggle('active')
                if (this.prTarget)  {
                    this.prTarget.classList.remove('active')
                }         
            };
            this.postTitle=title;
            this.postBody=body;
            var prevLog=function() {
                that.prId=that.postId
                that.prTarget=$event.target;
            }
            prevLog();
        }
    };

    setPage(item) {
        if (item<1 || item>this.lastPage) {
            return
        }
        else {
            this.currentPage=item
            this.pagination(this.posts)
        }
    };

    createPaginator(items) {
        let pagesAmount= Math.ceil(items.length/this.itemsOnPage);
        if (items.length<=this.itemsOnPage) {
            this.usePag=false;
            return
        }
        else {
            for (var i = 1; i <= pagesAmount; i++) {
                this.pages.push(i)
        }
            this.lastPage=pagesAmount;
        }
    }


    pagination(items) {
        if (this.usePag) {
            let firstPage=1;
            let startIndex=(this.currentPage-1)*this.itemsOnPage;
            let endIndex=startIndex+this.itemsOnPage;
            this.pageItems=items.slice(startIndex, endIndex);
        }
        else {
            this.pageItems=items;
            return
        }
    };

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

    checkAuthorization() {
        this.userIdAutho=this.authUser.getAuthorized().userId;
        if(this.id==this.userIdAutho) {
            this.makeNote=true;
        }
    };

    openWriter() {
        this.createNote=!this.createNote
    }
} //class close