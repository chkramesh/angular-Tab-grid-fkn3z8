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
import { Hero } from '../models';
import { Skill } from '../models';
import { Task } from '../models';

import { AppConstants  } from '../utils/app-constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 private currentUserSubject: BehaviorSubject<User>;
 public currentUser: Observable<User>;

 countries = [{'id':1, 'name':'India'}, {'id':2, 'name': 'USA'}, {'id':3, 'name': 'UK'}];
 // allSkills: Skill[];
 allSkills: Observable<Skill[]>;
 allTasks$: Observable<Task[]>;
 // allFonts: Observable<any[]>;
 // allHeros: Observable<any[]>;

 allFonts: any[] = AppConstants.ALL_FONT_SIZE;;
 allHeros: Hero[] = AppConstants.HEROES;
 
 langs: string[] = [
    'English',
    'French',
    'German',
  ];

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
  fontSize: String;
  skill: String;
  email: String;
  password: String;
  mgrOption: boolean;
  heros: String;
  tasks: String;
  //  endDateDivShow: boolean;
  //  managerName: any;

  constructor(private formBuilder: FormBuilder, 
    // private http: Http,
    private commonappservice: CommonAppService,
    private storage: LocalStorageService) { 

    // this.allSkills = this.commonAppService.getSkills();
    // console.log('this.allSkills 1 = ' + this.allSkills);

    // this.allFonts = AppConstants.ALL_FONT_SIZE;
    // this.allHeros = AppConstants.HEROES;
    console.log('this.allFonts 2 = ' + this.allFonts);    
    console.log('this.allHeros 3 = ' + this.allHeros);
    
    // var allSkillsData = JSON.stringify(this.allSkills);
    // console.log('this.allSkills 2 = ' + allSkillsData);
    // console.log('this.allSkills = ' + this.allSkillsData[1].name);

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('5 - 2 this.skill = ' + this.currentUser.skill + ' task = ' + this.currentUser.task + ' hero = ' + this.currentUser.hero + ' font = ' + this.currentUser.font);

    this.buildForm();

  }

  ngOnInit() {
     // this.buildForm();
    // this.getUser(1);
    // this.fetchUserRecord(1);

    // this.getSkills();
    this.getSkillsTest();
    this.getTasks();

    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // console.log('5 - 1 this.currentUser = ' + this.currentUser.id + ' firstName = ' + this.currentUser.firstName + ' lastName = ' + this.currentUser.lastName + ' country = ' + this.currentUser.country);
    // console.log('5 - 2 this.skill = ' + this.currentUser.skill + ' task = ' + this.currentUser.task + ' hero = ' + this.currentUser.hero + ' font = ' + this.currentUser.font);

    // this.allSkills = this.commonAppService.getSkills();
    // console.log('this.allSkills 1 = ' + this.allSkills);

    // var allSkillsData = JSON.stringify(this.allSkills);
    // console.log('this.allSkills 2 = ' + allSkillsData);

    // // console.log('this.allSkills = ' + this.allSkills[1].name);
    // console.log('this.allSkills 3 = ' + this.allSkills[0]);
    // this.buildForm();           
  }

  public buildForm() {
      // create form with validators
      this.exampleForm = this.formBuilder.group({ 
      firstName : ['', [Validators.required,Validators.minLength(3), Validators.maxLength(10)]],
      // lastName : '', 
      lastName : [this.currentUser.lastName], 
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
      fontSize: [this.currentUser.font],
      // skill: [],
      skill: [this.currentUser.skill],
      //skill: [this.allSkills[2]],
      email: [''],
      password: [''],      
      mgrOption : '',
      heros : [this.currentUser.hero],
      tasks : [this.currentUser.task],

      // skill: 'Angular', task: 1, hero: 12, font: '15'
     
      // country: [this.countries[2].id],
      // checked: false,
      // indeterminate: false,
      // locationflag:true,
      // homelocation:true,
      // language:'',
      // skill: [this.allSkills[2]]
    });
  }

  // allSkills: Skill[];
  // allSkills: Observable<Skill[]>;

  getSkills(): void {
    this.commonappservice.getSkills()
    // .subscribe(heroes => this.heroes = heroes);
    // .subscribe(allSkills => this.allSkills = allSkills);    
    .subscribe(data => this.allSkills = data);    
  }

  getSkillsTest() {
    console.log('Observable Component getUserOnLoad ');
    // this.loading = true;
    this.commonappservice.getSkills().subscribe( data => {
      // this.loading = false;
      this.allSkills = data;
      // this.processResults();
      console.log(' 2 this.allSkills = ' + this.allSkills);
      // const record = this.userResults.find(obj => obj[this.id] === userId);
    });
  }  

  getTasks(): void {
    this.allTasks$ = this.commonappservice.getTasks();
    // .subscribe(heroes => this.heroes = heroes);
    // .subscribe(allSkills => this.allSkills = allSkills);    
    //.subscribe(data => this.allTasks = data);    
  }

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

  countryChange(event) {
     // console.log('value = ' + event.source.value + ' selected = ' + event.source.selected);
     // console.log('countryChange exampleForm 1 = ' + this.exampleForm.get('country').value);
  }

  resizeTextArea(event) {}
  languageChange(event) {}
  heroChange(event) {}

}