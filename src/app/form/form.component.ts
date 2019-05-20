import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import { Http, RequestOptionsArgs, Headers, Response } from "@angular/http";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { LocalStorageService } from 'ngx-webstorage';

import { CommonAppService } from '../service/common/common-app.service';
import { User } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User>;

 countries = [{'id':1, 'name':'India'}, {'id':2, 'name': 'USA'}, {'id':3, 'name': 'UK'}];
 allSkills: Observable<any[]>;
 
 langs: string[] = [
    'English',
    'French',
    'German',
  ];

  constructor(private formBuilder: FormBuilder, 
    // private http: Http,
    private commonAppService: CommonAppService,
    private storage: LocalStorageService) { }

  exampleForm: FormGroup;
  id: FormControl;
  username: String;
  firstName: String;
  lastName: String;
  gender: String;
  currentDate: Date;
  country: String;
  street: String;
  city: String;
  zip: number;
  state: String;
  location: String;
  language: String;
  region: String;
  role: String;
  skill: String;
  email: String;
  password: String;
  mgrOption: boolean;
  //  endDateDivShow: boolean;
  //  managerName: any;

  
  

  ngOnInit() {
     this.buildForm();
    // this.getUser(1);
    // this.fetchUserRecord(1);

    // this.allSkills = this.commonAppService.getSkills();
    // console.log('this.allSkills 1 = ' + this.allSkills);

    // var allSkillsData = JSON.stringify(this.allSkills);
    // console.log('this.allSkills 2 = ' + allSkillsData);

    // // console.log('this.allSkills = ' + this.allSkills[1].name);
    // console.log('this.allSkills 3 = ' + this.allSkills[0]);

    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //         console.log('Form 5 - 1 this.currentUser = ' +this.currentUser.id + ' firstName = ' + this.currentUser.firstName + ' lastName = ' +this.currentUser.lastName + ' country = ' +this.currentUser.country);

           
  }

  public buildForm() {
      // create form with validators
      this.exampleForm = this.formBuilder.group({ 
      firstName : ['', [Validators.required,Validators.minLength(3), Validators.maxLength(10)]],
      lastName : '', 
      gender: '',
      currentDate : '',
      country : '',
      street : '',
      city : '',
      zip : '',
      state : '',
      location : '',
      language : '',
      region : '',
      role: '',
      // skill: [''],
      skill: [this.allSkills[2]],
      email: [''],
      password: [''],      
      mgrOption : ''
     
      // country: [this.countries[2].id],
      // checked: false,
      // indeterminate: false,
      // locationflag:true,
      // homelocation:true,
      // language:'',
      // skill: [this.allSkills[2]]
    });
  }


  // createFormControls() {
  //   this.firstName = new FormControl('', Validators.required);
  //   this.lastName = new FormControl('', Validators.required);
  //   this.email = new FormControl('', [
  //     Validators.required,
  //     Validators.pattern("[^ @]*@[^ @]*")
  //   ]);
  //   this.password = new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  //   this.language = new FormControl('');
  // }

  // createForm() {
  //   this.myform = new FormGroup({
  //     name: new FormGroup({
  //       firstName: this.firstName,
  //       lastName: this.lastName,
  //     }),
  //     email: this.email,
  //     password: this.password,
  //     language: this.language
  //   });
  // }



  // getUser(userId:number) {
  //   console.log('Observable Component getUserOnLoad id = ' + userId);
  //   this.loading = true;
  //   this.commonappservice.getUser(userId).subscribe( data => {
  //     this.loading = false;
  //     this.userResults = data;
  //     // this.processResults();
  //     console.log(' 2 this.userResults = ' + this.userResults);
  //     // const record = this.userResults.find(obj => obj[this.id] === userId);
  //   });
  // }

  // processResults() {
  //   // Do some stuff with your results, this.Result is set now
  //   console.log(' 3 this.userResults = ' + this.userResults);
  // }

  // public fetchUserRecord(userId:number) {
  //   // Display the data retrieved from the data model to the form model.
  //   this.commonappservice.getRecordById(userId)
  //       .subscribe(data => {
  //           // this.fillForm(data);
  //           console.log(' 3 this.userResults data = ' +data.id + ' firstName = ' + data.firstName);
  //         },
  //         // (err: HttpErrorResponse) => {
  //         //   console.log(err.error);
  //         //   console.log(err.message);
  //         //   this.handleError(err);
  //         // }
  //         );
  // }

}