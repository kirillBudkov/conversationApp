import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ServicesService {

    constructor(private http: Http) { }

    getUsers(){
        return this.http.get( 'https://jsonplaceholder.typicode.com/users' ).toPromise();
    };
    getUser( userId ){
        return this.http.get( 'https://jsonplaceholder.typicode.com/users/'+userId ).toPromise();
    };
    getPosts( userId? ){ 
        if( userId ){
            return this.http.get( 'https://jsonplaceholder.typicode.com/posts/?userId='+userId ).toPromise();
        }
        else {
            return this.http.get( 'https://jsonplaceholder.typicode.com/posts' ).toPromise();
        }
    }; 
    getAlbums(userId) {
        return this.http.get('https://jsonplaceholder.typicode.com/albums/?userId='+userId).toPromise();
    }; 
    getPhotos(albumId) {
        return this.http.get('https://jsonplaceholder.typicode.com/photos/?albumId='+albumId).toPromise();
    };
    getComments(postId) {
        return this.http.get('https://jsonplaceholder.typicode.com/comments/?postId='+postId).toPromise();
    };     
    sendPost(post) {
        return this.http.post('https://jsonplaceholder.typicode.com/posts', post).toPromise();
    }
}
