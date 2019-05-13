import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorHandler } from './error-handler';

// import { ErrorHandler } from '../helper';
// import { SearchItem } from '../models';
// import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(public errorHandler: ErrorHandler) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                // location.reload(true);
            }    

            console.log('ErrorInterceptor err.status = ' + err.status);        
            console.log('ErrorInterceptor err.error = ' + err.error);  
            // const error = err.error.message || err.statusText;
            const error = err.error || err.statusText;
            // const error = err.error.message || err.statusText;
            console.log('ErrorInterceptor error = ' + error);
            // return throwError(error);

            return next.handle(request).do((event: HttpEvent<any>) => {}, (err: any) => {
              if (err instanceof HttpErrorResponse) {
                this.errorHandler.handleError(err);
              }
            });

        }))
    }
}