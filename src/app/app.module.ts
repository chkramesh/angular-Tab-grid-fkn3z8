import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
// import { HttpModule, Http } from '@angular/http';
// import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { NgxWebstorageModule } from 'ngx-webstorage';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService }  from '../server/in-memory-data.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { OthersComponent } from './others/others.component';
import { AddressComponent } from './address/address.component';
import { MembersComponent } from './members/members.component';
import { ObservablesComponent } from './observables/observables.component';

import { SearchService } from './service/search.service';
import { CommonAppService } from './service/common/common-app.service';

import { ErrorInterceptor } from './helper';


import 'hammerjs';

// import { MatTabsModule } from '@angular/material';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
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
    // MatTabsModule,
    // HttpModule, 
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    MaterialModule, FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService
    ),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    SearchComponent, 
    OthersComponent,
    AddressComponent,
    MembersComponent,
    ObservablesComponent
  ],
  providers: [ HttpClientModule, SearchService, CommonAppService, 
               { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
