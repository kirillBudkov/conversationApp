import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LikeComponent } from './like/like.component';
import { ProfileComponent } from './profile/profile.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { NotesComponent } from './notes/notes.component';
import { CommentsComponent } from './comments/comments.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LikeComponent,
    ProfileComponent,
    AlbumsComponent,
    AlbumComponent,
    NotesComponent,
    CommentsComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    UserInfoComponent,
    NavbarComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUA8vqqBXbro1yAtxr8T8rGrIrB4ULf6w'
    }),
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'user/:id',
         component: ProfileComponent
      },  
      {
        path: 'user/:id',
        component: ProfileComponent,
        children: [
            {
            path: 'info/:id',
            component: UserInfoComponent,
            },
            {
            path: 'posts/:id',
            component: PostsComponent
            },
            {
            path: 'albums/:id',
            component: AlbumsComponent
            },
            {
            path: 'albums/:id',
            component: AlbumsComponent,
            children: [
                {
                path: 'album/:albumId',
                component: AlbumComponent
                },    
                      ]
            },
        ]
      },
      {
      path: '**',
      redirectTo: 'users'
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
