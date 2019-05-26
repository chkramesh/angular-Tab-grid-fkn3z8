import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from '../errorService/logging.service';

import { ErrorService } from '../errorService/error.service';
import { NotificationService } from '../errorService/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }
  
  handleError(error: Error | HttpErrorResponse) {
    const errorService = this.injector.get(ErrorService);
    // const logger = this.injector.get(LoggingService);
    const notifier = this.injector.get(NotificationService);

    console.log('errorService = '+errorService);
    // console.log('errorService = '+logger);
    console.log('notifier = '+errorService);

    let message;
    let stackTrace;
    if (error instanceof HttpErrorResponse) {
      // Server error
      console.log('error Server ====== ' + error);
      message = errorService.getServerErrorMessage(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);
      notifier.showError(message);
    } else {
      // Client Error
      console.log('error client ====== ' + error);
      message = errorService.getServerErrorMessage(error);
      notifier.showError(message);
    }
    // Always log errors
    // logger.logError(message, stackTrace);
    console.error(error);
  }
}