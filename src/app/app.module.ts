import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { NgxWebstorageModule } from 'ngx-webstorage';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MaterialModule } from './material.module';
import { InMemoryDataService }  from '../server/in-memory-data.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { OthersComponent } from './others/others.component';
import { AddressComponent } from './address/address.component';
import { MembersComponent } from './members/members.component';
import { ObservablesComponent } from './observables/observables.component';

import { SearchService } from './service/search.service';
import { CommonAppService } from './service/common/common-app.service';

// import { ErrorInterceptor } from './helper';
// import { ErrorHandler } from './helper';
// import { GlobalErrorHandlerService } from './helper/global-error-handler.Service';
import { GlobalErrorHandler } from './helper/global-error-handler';
import { ServerErrorInterceptorService } from './helper/server-error-interceptor.service';
import 'hammerjs';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'form', component: SearchComponent },
  { path: 'others', component: OthersComponent },
  { path: 'address', component: AddressComponent },
  { path: 'members', component: MembersComponent },
  { path: 'observables', component: ObservablesComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    MaterialModule, FlexLayoutModule,
    MatSnackBarModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {passThruUnknownUrl: true}
    ),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    SearchComponent, 
    FormComponent,
    OthersComponent,
    AddressComponent,
    MembersComponent,
    ObservablesComponent
  ],
  providers: [ HttpClientModule, SearchService, CommonAppService, ServerErrorInterceptorService,
               // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
               // { provide: ErrorHandler, useClass: GlobalErrorHandler },
                { provide: ErrorHandler, useClass: GlobalErrorHandler },                
                { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptorService, multi: true }
               
               
               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
