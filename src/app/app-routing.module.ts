import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

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
import { MapComponent } from './map/map.component';
import { AlbumGuard} from './album.guard';

@NgModule({
    imports: [
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
                            component: AlbumComponent,
                            canActivate: [AlbumGuard]
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
    exports: [
        RouterModule
    ],
    providers: [AlbumGuard]
})

export class AppRoutingModule {}