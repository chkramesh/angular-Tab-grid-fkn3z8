import { Component, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';

import { FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";
import { Http, RequestOptionsArgs, Headers, Response } from "@angular/http";
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger, VERSION} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import { LocalStorageService } from 'ngx-webstorage';

import { CommonAppService } from '../service/common/common-app.service';
import { User } from '../models';
import { Hero } from '../models';
import { Skill } from '../models';
import { Task } from '../models';

import { AppConstants  } from '../utils/app-constants';
import { IUSState, USStateFilter  } from '../utils/app-util';
@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit { //, AfterViewInit, OnDestroy {

  exampleForm: FormGroup;  
  subscription: Subscription;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  countries = [{id: 'USA', name: 'United States'}, {id: 'UK', name: 'United Kingdom'}, {id: 'FR', name: 'France'}];
  // allSkills: Skill[];
  allSkills: Observable<Skill[]>;
  allTasks$: Observable<Task[]>;
  // allFonts: Observable<any[]>;
  // allHeros: Observable<any[]>;

  allFonts: any[] = AppConstants.ALL_FONT_SIZE;;
  allHeros: Hero[] = AppConstants.HEROES;
  states: Observable<IUSState[]>;

  langs: string[] = [ 'English', 'French', 'German'];  

  constructor(private formBuilder: FormBuilder, 
    // private http: Http,
    private commonappservice: CommonAppService,
    private storage: LocalStorageService) { 

        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('5 - 2 this.skill = ' + this.currentUser.skill + ' task = ' + this.currentUser.task + ' hero = ' + this.currentUser.hero + ' font = ' + this.currentUser.font + ' gender = ' + this.currentUser.gender);

        // this.buildForm();
        // this.stateCtrl = new FormControl();
  }

  ngOnInit() {
    this.buildForm();
    // this.getUser(1);
    // this.fetchUserRecord(1);

    // this.getSkills();
    this.getSkillsTest();
    this.getTasks();
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.onChanges();

  }

  public buildForm() {
      // create form with validators
      this.exampleForm = this.formBuilder.group({ 
          firstName : ['', [Validators.required,Validators.minLength(3), Validators.maxLength(10)]],
          // lastName : '', 
          lastName : [this.currentUser.lastName], 
          gender:[this.currentUser.gender],
          currentDate : '',
          country : '',
          street : '',
          city : '',
          zip : '',
          state : ['', [Validators.required]],
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
          // country: [this.countries[2].id],
          // checked: false,
          // indeterminate: false,
          // locationflag:true,
          // homelocation:true,
          // language:'',
          // skill: [this.allSkills[2]]
    });

    console.log('this.exampleForm ############## = ' + this.exampleForm);
    console.log('this.exampleForm ############## = ' + this.exampleForm.get('state'));

    this.stateFilter();
  }

   onChanges() {
      console.log('onChanges');
      console.log('onChanges country = ' +  this.exampleForm.get('country').value);
      console.log('onChanges state = ' +  this.exampleForm.get('state').value);
      // const addressLine2Control = this.exampleForm.get('addressLine2');
      const stateControl = this.exampleForm.controls['state'];

      stateControl.setValidators(null);
      stateControl.disable();      

      this.exampleForm.get('country').valueChanges
      .subscribe(selectedCountry => {
          console.log('onChanges selectedCountry = ' +  selectedCountry);
          if (selectedCountry != 'USA') {
              console.log('onChanges selectedCountry state = ' +  this.exampleForm.get('state'));
              // this.exampleForm.get('addressLine2').enable();

              // below code working
              this.exampleForm.controls['state'].reset();
              stateControl.disable();
              stateControl.setValidators(null);
          }
          else {
              // this.exampleForm.get('addressLine2').disable();
              this.exampleForm.controls['state'].enable();
              stateControl.setValidators([Validators.required]);
              stateControl.updateValueAndValidity();
          }
      });

      // this.addressForm.get('inputWorks').valueChanges
      // .subscribe(inputWorksValue => {
      //     if (inputWorksValue.length <= 2) {
      //         // below code working
      //         this.addressForm.controls['selectNope'].reset();
      //         this.addressForm.controls['selectNope'].disable();
      //     }
      //     else {
      //         this.addressForm.controls['selectNope'].enable();
      //     }
      // });
  }

  stateFilter() {
      this.states = this.exampleForm
      // .get('address')
      .get('state')
      .valueChanges.pipe(startWith(''), map(value => USStateFilter(value)))
  }

  getSkills(): void {
    this.commonappservice.getSkills()   
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
  }

  stateHandler(event: MatAutocompleteSelectedEvent): void {
    console.log('stateHandler event.option.value = ' +event.option.value);
    // this.stateCtrl.setValue(event.option.value);
  }

  countryChange(event) {
     // console.log('value = ' + event.source.value + ' selected = ' + event.source.selected);
     // console.log('countryChange exampleForm 1 = ' + this.exampleForm.get('country').value);
  }

  resizeTextArea(event) {}
  languageChange(event) {}
  heroChange(event) {
     console.log('heroChange event.option.value = ' +event.option.value);
  }

 

  

}