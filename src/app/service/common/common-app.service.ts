import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { HttpClientModule } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { User } from '../../models';
// import { Student } from '../../model';
// import { User } from '.../models';
// import { SearchItem } from '../models';

@Injectable()
export class CommonAppService {

  // private membersUrl = 'api/members';
  private appUrl = 'api/user';

  constructor(private http: HttpClient) { }

  //  { id: 1, username:'jbrown', firstName: 'Windstorm', lastName: 'Windstorm', gender:'M', country:'USA', state:'NJ', location:'USA', lang: 'Eng', region:'EAST', role: 'admin'},

  public getUser(userId: string): Observable<any> {
    console.log('getUser appUrl = ' + this.appUrl);
    return this.http.get<User>(this.appUrl).pipe(
      catchError((error: any) => {
           console.error(error);
           return of();
         }),
    );
  }

  public getUserOnLoad(userId: string): Observable<User[]> {
    console.log('userId = ' + userId);
    // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(this.appUrl).pipe(
      map(res => {
        return res.results.map(item => {
          return new User(
            item.id,
            item.username,
            item.firstName,
            item.lastName,
            item.gender,
            item.country,
            item.state,
            item.location,
            item.lang,
            item.region,
            item.role
          );
        });
      })
    );
  }

  // public getAllRecords(url): Observable<any> {
  //   console.log('getAllRecords url = ' + url);
  //   return this.http.get<MemberModel>(url).pipe(
  //     catchError((error: any) => {
  //          console.error(error);
  //          return of();
  //        }),
  //   );
  // }

  // search(term: string): Observable<SearchItem[]> {
  //   console.log('term = ' + term);
  //   let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
  //   return this.http.get(apiURL).pipe(
  //     map(res => {
  //       return res.results.map(item => {
  //         return new SearchItem(
  //           item.trackName,
  //           item.artistName,
  //           item.trackViewUrl,
  //           item.artworkUrl30,
  //           item.artistId
  //         );
  //       });
  //     })
  //   );
  // }

  

}