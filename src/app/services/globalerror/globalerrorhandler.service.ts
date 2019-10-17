import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../notification/notification.service';
import { ErrorService } from '../error/error.service';



@Injectable()
export class GlobalerrorhandlerService implements ErrorHandler {

    // Error handling is important and needs to be loaded first.
    // Because of this we should manually inject the services with Injector.
    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {
    
       
        const errorService = this.injector.get(ErrorService);
        const notifier = this.injector.get(NotificationService);
        let message;

        if (error instanceof HttpErrorResponse) {
            console.log('1');
            // Server Error
            message = errorService.getServerMessage(error);
            //stackTrace = errorService.getServerStack(error);
            notifier.showError(message);
        } else {
            
           
            // Client Error
            message = errorService.getClientMessage(error);
            console.log(message,'2');
            //stackTrace = errorService.getClientStack(error);
            notifier.showError(message);
        }

    }
}

