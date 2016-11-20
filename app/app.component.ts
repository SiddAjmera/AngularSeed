import {Component} from 'angular2/core';
import { SignupFormComponent } from './signup-form.component';
import { ResetPasswordComponent } from './resetpassword-form.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>
        <signup-form></signup-form>
        <reset-password></reset-password>
    `,
    directives: [ SignupFormComponent, ResetPasswordComponent ]
})
export class AppComponent { }