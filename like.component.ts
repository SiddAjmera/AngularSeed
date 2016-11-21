import { Component, Input } from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
        .glyphicon-heart {
            cursor: pointer;
        }
    `]
})

export class LikeComponent{
    @Input() liked = false;
    @Input() likes = 0;
    
    toggleLiked(){
        this.liked = !this.liked;
        (this.liked) ? this.likes++ : this.likes--;
    }
}