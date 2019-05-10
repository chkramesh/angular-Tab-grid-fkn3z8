import { Injectable } from '@angular/core';

import { HttpClientModule, HttpClient } from "@angular/common/http";
// import { HttpClientModule } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

// import { Student } from '../model';
import { User } from '.../models';
// import { SearchItem } from '../models';

@Injectable()
export class CommonAppService {

  constructor() { }

}