import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
// import { map) 'rxjs/add/operator/map';

import { AppConstants  } from '../../utils/app-constants';
import { User } from '../../models';
import { Skill } from '../../models';
import { ALL_SKILLS } from '../../utils/common-data';

// import { ALL_FONT_SIZE } from '../../utils/common-data';
// import { ALL_SKILLS } from '../../utils/app-constants';
// import { Student } from '../../model';
// import { User } from '.../models';
// import { SearchItem } from '../models';

@Injectable()
export class CommonAppService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

 // private results: Observable<SearchItem[]>;
  // private membersUrl = 'api/members';
  private appUrl = 'api/user';  // URL to web api
  private skillUrl = 'api/skills';  // URL to web api

  constructor(private http: HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();
  }

  //  { id: 1, username:'jbrown', firstName: 'Windstorm', lastName: 'Windstorm', gender:'M', country:'USA', state:'NJ', location:'USA', lang: 'Eng', region:'EAST', role: 'admin'},

  public getUser(userId: number): Observable<any> {
    // console.log('Service getUser appUrl = ' + this.appUrl);
    return this.http.get<User>(this.appUrl).pipe(
      tap(data => console.log(data)),
      // map(data => data),
      catchError((error: any) => {
           console.error(error);
           return of();
         }),
    );
  }

  public getRecordById(recordId): Observable<any> {
    // console.log('Service getRecordById appUrl = ' + this.appUrl);
    return this.http.get<any>(`${this.appUrl}/${recordId}`).pipe(
      map(user => {
            if (user) {
                // localStorage.setItem('currentUser', JSON.stringify(user));
                // this.currentUserSubject.next(user);
            }
            return user;
      }),
      // catchError((error: any) => {
      //      console.error(error);
      //      return of();
      // }),
      
    );
  }

  getSkillsTest (): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.skillUrl).pipe(
        tap(data => console.log(data)),
        // tap(skills => this.log(`fetched heroes`)),
        catchError(this.handleError('getSkills', []))
      );
  }

  getSkills() {
	    // return Observable.of(ALL_SKILLS);		
      return of(ALL_SKILLS);	      
	}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getFonts() {
	//     // return Observable.of(ALL_FONT_SIZE);		
  //     // return of(ALL_FONT_SIZE);	
  //     return AppConstants.ALL_FONT_SIZE;
	// }

  // public getRecordById(recordId): Observable<any> {
  //   return this.http.get<any>(`${this.appUrl}/${recordId}`).pipe(
  //     catchError((error: any) => {
  //          console.error(error);
  //          return of();
  //        }),
  //   );
  // }

//   public search(term: string): Observable<User[]> {
//   // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
//   return this.http.get(this.appUrl)
//       .map(res => {
//         return res.json().results.map(item => {
//           console.log('getUserOnLoad 3 - 2 userId = ' + term);
//           return new User(
//              item.id,
//              item.username,
//              item.firstName,
//              item.lastName,
//              item.gender,
//              item.country,
//              item.state,
//              item.location,
//              item.lang,
//              item.region,
//              item.role
//           );
//         });
//       });
// }

//   public getUserOnLoad(userId: number): Observable<User[]> {
//     console.log('getUserOnLoad 3 - 1 userId = ' + userId);
//     // let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
//     return this.http.get(this.appUrl).pipe(
//       map(res => {
//         // console.log('getUserOnLoad 3 - 2 userId = ' + res.id); 
//         return res.results.map(item => {
//           console.log('getUserOnLoad 3 - 2 userId = ' + userId);
//           // return new User(
//           //   item.id,
//           //   item.username,
//           //   item.firstName,
//           //   item.lastName,
//           //   item.gender,
//           //   item.country,
//           //   item.state,
//           //   item.location,
//           //   item.lang,
//           //   item.region,
//           //   item.role
//           // );
//         });
//       })
//     );
//   }

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