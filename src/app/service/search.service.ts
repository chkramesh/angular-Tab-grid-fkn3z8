import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { Student } from '../model';
import { User } from '../models';
import { SearchItem } from '../models';

// import { User } from '../models';
// import { SearchItem } from '../search-items';

// import { User } from '../models';

// import { SearchItem } from './models/search-item';
// import { SearchItemModel } from './model';
// import { SearchItem } from '../model';

// import { MemberModel } from './members/member.model'

@Injectable()
export class SearchService {

  private results: Observable<SearchItem[]>;

  apiRoot: string = "https://itunes.apple.com/search";
  constructor(private http: HttpClient) {}

  search(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL).pipe(
      map(res => {
        return res.results.map(item => {
          return new SearchItem(
            item.trackName,
            item.artistName,
            item.trackViewUrl,
            item.artworkUrl30,
            item.artistId
          );
        });
      })
    );
  }

}