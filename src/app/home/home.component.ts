import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

@Component({
  selector: 'app-home',
  template: `
    <div style="margin: 40px">
      <button (click)="throwError()">Error</button>
      <button (click)="throwHttpError()">HTTP</button>
    </div>
  `
})
export class HomeComponent {

  constructor(private http: HttpClient) {
  }
  
  throwError(){
    throw new Error('My Pretty Error');
  }

  throwHttpError(){
    this.http.get('urlhere').subscribe();
  }
}
