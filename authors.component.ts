import { Component } from 'angular2/core';
import { AuthorService } from './author.service';
import { FavouriteComponent } from './favourite.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <like [liked]="twitterFeed.liked" [likes]="twitterFeed.likes"></like>
        <favourite [isFavourite]="post.isFavourite" (change)="onChange($event)"></favourite>
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
        <voter [voteCount]="post.voteCount" [myVote]="post.myVote" (vote)="userVoted($event)"></voter>
    `,
    providers: [ AuthorService ],
    directives: [ FavouriteComponent, LikeComponent, VoterComponent ]
})

export class AuthorsComponent{
    post = {
        title: "Title of the post",
        isFavourite: true,
        voteCount: 50,
        myVote: 0
    }

    userVoted($event){
        console.log("User Voted!", $event);
    }

    twitterFeed = {
        likes: 10,
        liked: false
    }

    title: string = "Title for the Authors Section";
    authors;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }

    onChange($event){
        console.log("onChange got called!", $event);
    }
}