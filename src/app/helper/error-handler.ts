import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorHandler {

  constructor(
    public snackbar: MatSnackBar, private zone: NgZone
  ) {}

  public handleError(err: any) {
    // this.snackbar.open(err.message, 'close');
    // this.snackbar.open(err.message, 'X', {panelClass: ['error']});

    this.zone.run(() => {
      // The second parameter is the text in the button.
      // In the third, we send in the css class for the snack bar.
      this.snackbar.open(err.message, 'X', {panelClass: ['error']});
    });

  }
}