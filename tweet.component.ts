import { Component, Input } from 'angular2/core';
import { LikeComponent } from './like.component';

@Component({
    selector: 'tweet',
    template: `
        <div class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object user-image" src="{{image}}" alt="{{name}}">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    <span class="name">{{name}}</span>
                    <span class="username">{{username}}</span>
                </h4>
                <p>{{tweet}}</p>
                <div>
                    <like [liked]="liked" [likes]="likes"></like>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .name{
            font-weight: bold;
        }
        .username{
            font-weight: bold;
            color: #bbb;
        }
        .user-image{
            border-radius: 15px
        }
    `],
    directives: [ LikeComponent ]
})

export class TweetComponent{
    @Input() image = "http://lorempixel.com/100/100/people/";
    @Input() name = "Siddharth Ajmera";
    @Input() username = "@SiddAjmera";
    @Input() tweet = "Angular2 is Awesome!";
    @Input() liked = false;
    @Input() likes = "50";
}