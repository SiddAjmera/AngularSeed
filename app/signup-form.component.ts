import { Component } from 'angular2/core';
import { Control, ControlGroup, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html',
})

export class SignupFormComponent{
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    form: ControlGroup;

    //Cleaner than the above method.
    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique],
            password: ['', Validators.required]
        });
    }

    signup(){
        this.form.find('username').setErrors({
            invalidLogin: true
        });
    }
}