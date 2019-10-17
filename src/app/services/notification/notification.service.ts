import { Injectable, ViewContainerRef} from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';




@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public toastr: ToastrManager) {
    }

  showSuccess(message: string): void {
    //this.snackBar.open(message);
    this.toastr.successToastr(message)

  }

  showError(message: string): void {
    this.toastr.errorToastr(message)
    
    // The second parameter is the text in the button.
    // In the third, we send in the css class for the snack bar.

    //this.snackBar.open(message, 'X', {panelClass: ['error-snackbar'], verticalPosition: 'top', horizontalPosition: 'center'});
  }
}
