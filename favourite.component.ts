import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'favourite',
    templateUrl: 'app/favourite.template.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})

export class FavouriteComponent{
    @Input() isFavourite = false;
    @Output() change = new EventEmitter();
    toggleFavourite(){
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}