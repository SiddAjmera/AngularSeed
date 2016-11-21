import { Component, Input } from 'angular2/core';

@Component({
    selector: 'zipper',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading">
                <p class="panel-title title">{{ title }}</p>
                <i class="glyphicon clickable" 
                   [ngClass]="{
                       'glyphicon-chevron-down': !isOpened,
                       'glyphicon-chevron-up': isOpened
                   }"
                   (click)="toggleContent()"></i>
            </div>
            <div class="panel-body" *ngIf="isOpened">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .clickable{
            cursor: pointer;
            float: right;
            margin-top: -18px;
        }
        .title{
            font-weight: bold;
        }
    `]
})

export class ZipperComponent{
    isOpened = false;
    @Input() title = "This is the title";
    toggleContent(){
        this.isOpened = !this.isOpened;
    }
}