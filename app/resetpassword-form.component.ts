import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { ConfirmPasswordValidators } from './ConfirmPasswordValidators';

@Component({
    selector: 'reset-password',
    templateUrl: 'app/resetpassword.component.html'
})

export class ResetPasswordComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            oldPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                Validators.minLength
            ])],
            confirmPassword: ['', Validators.required]
        }, { validator: ConfirmPasswordValidators.dontMatch });
    }

    changePassword(){
        var oldPassword = this.form.find("oldPassword");
        if(oldPassword.value != "1234"){
            oldPassword.setErrors({ invalidPassword: true });
        }
        if(this.form.valid) alert("password changed successfully");
    }
}