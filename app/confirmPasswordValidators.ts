import { ControlGroup } from 'angular2/common';

export class ConfirmPasswordValidators {
    static dontMatch(controlGroup: ControlGroup) {
        var confirmPassword = controlGroup.find("confirmPassword").value;
        var newPassword = controlGroup.find("newPassword").value;

        if(confirmPassword != newPassword) return{ dontMatch: true }
        return null;
    }
}