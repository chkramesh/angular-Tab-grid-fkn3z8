import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  //  template: `<mat-toolbar color="primary">
  //             <h1><span class="heart">❤</span> {{ name }} </h1>
  //           </mat-toolbar>`,
  styles: [`h1 { font-family: Lato; } .heart { color: #f95372; } .example-spacer {
  flex: 1 1 auto;
}`]
  // template: `<h1>Hello {{name}}!</h1>`,
  // styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  @Input() userName: string;
}
