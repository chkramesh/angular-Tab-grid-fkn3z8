import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule, FormControl, FormsModule } from "@angular/forms";

import { CommonAppService } from './service/common/common-app.service';
import { User } from './models';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Angular 7 reactive form';
  userName = 'Test User';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  
  private loading: boolean = false;
  // private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  // private userResults: Observable<User[]>;
  public userResults: Observable<User[]>;
  // userResults: Observable<User[]>;

  constructor(private commonappservice: CommonAppService) {

    this.fetchUserRecord(1);

    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    // this.currentUser = this.currentUserSubject.asObservable();

    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // console.log('5 - 1 this.currentUser = ' + this.currentUser.id + ' firstName = ' + this.currentUser.firstName + ' lastName = ' + this.currentUser.lastName + ' country = ' + this.currentUser.country);
   }

  ngOnInit() {
    // this.getUser(1);
    // this.fetchUserRecord(1);

  }

  getUser(userId:number) {
    console.log('Observable Component getUserOnLoad id = ' + userId);
    this.loading = true;
    this.commonappservice.getUser(userId).subscribe( data => {
      this.loading = false;
      this.userResults = data;
      // this.processResults();
      console.log(' 2 this.userResults = ' + this.userResults);
      // const record = this.userResults.find(obj => obj[this.id] === userId);
    });
  }

  processResults() {
    // Do some stuff with your results, this.Result is set now
    console.log(' 3 this.userResults = ' + this.userResults);
  }

  public fetchUserRecord(userId:number) {
    // Display the data retrieved from the data model to the form model.
    this.commonappservice.getRecordById(userId)
        .subscribe(data => {
            // this.fillForm(data);           
            localStorage.setItem('currentUser', JSON.stringify(data));

            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log('4 - 1 this.currentUser = ' + this.currentUser.id + ' firstName = ' + this.currentUser.firstName + ' lastName = ' + this.currentUser.lastName + ' country = ' + this.currentUser.country);
          },
          // (err: HttpErrorResponse) => {
          //   console.log(err.error);
          //   console.log(err.message);
          //   this.handleError(err);
          // }
          );
  }
}


// ------------------Ramesh Stackblitz --
// https://www.concretepage.com/angular-2/angular-2-formcontrol-example

// https://stackblitz.com/edit/angular-fkn3z8?file=src%2Fapp%2Fapp.component.ts

// with tabs - no code
// https://stackblitz.com/@chkramesh

// with tabs- working on
// https://stackblitz.com/edit/angular-material-table-with-multi-queries-nco2rz

// with tabs - Reacitve form code
// https://stackblitz.com/edit/angular-material-tab-example-bbzfbz

// Reacitve form code
// https://stackblitz.com/edit/angular-rjkbpo
// https://stackblitz.com/edit/angular-form-disabled-pgw1ky


// lot of Reacitve form code - *****
// https://stackblitz.com/edit/angular-85xtbj

// Reacitve form code - for posting issues
// https://stackblitz.com/edit/example-angular-material-reactive-form-v4ioft
// https://stackblitz.com/edit/example-angular-material-reactive-form-sm4qch
// https://stackblitz.com/edit/angular-material-form-jr3saw
// https://stackblitz.com/edit/angular-mat-formfield-flex-layout-rjewhy

// gloabal error handling - have to fix
// https://stackblitz.com/edit/angular-6-httpclient-global-error-handling-bezgtx
// global-error-catching-angular-emv7pj
// global-error-catching-angular-zzm2qa

// good- use for experiment
// github-uh3oom
// github-unklbx

// Working Code
// angular-fkn3z8


// -- Delete ?
// https://stackblitz.com/edit/angular-os6b3c
// https://stackblitz.com/edit/angular-eyyciy
// https://stackblitz.com/edit/angular-reactive-form-sobsoft-fesafd
// https://stackblitz.com/edit/angular-mat-formfield-flex-layout-f1y5av
// https://stackblitz.com/edit/angular-mat-formfield-flex-layout-887at5
// https://stackblitz.com/edit/angular-mat-formfield-flex-layout-stejxb
// angular-hqphcq
// https://stackblitz.com/edit/angular-s8v7re
// https://stackblitz.com/edit/angular-mldo1i
// https://stackblitz.com/edit/angular-x4vwqg




// https://stackoverflow.com/questions/46769042/subscribe-to-observable-is-returning-undefined
// https://codecraft.tv/courses/angular/http/http-with-observables/
// https://appdividend.com/2018/12/08/angular-7-observables-tutorial-with-example/

// import { PortalConstants } from '../../../utils/portal.constants';

// settings_security(): void {
//         let SETTINGS_PAGE = PortalConstants.SETTINGS_NAVIGATION_OBJECT;
//         let SECURITY_PAGE = PortalConstants.SETTINGS_SECURITY_NAVIGATION_OBJECT;
//         let navigation = new NxpNavigation();
//         navigation.parentPage = SETTINGS_PAGE;
//         navigation.childPage = SECURITY_PAGE;
//         this.navigationService.handleNavigation(navigation);
//     }

// src/utils/portal.constants.ts
//export class PortalConstants {

  // public static CHILD_HOME_NAVIGATION_OBJECT: any = {'id':  'household',  'name':  'Household', 'group': {'id':  'lists',  'name':  'Lists' , children: [
  //       { 'id': 'household', 'name': 'Household'},
  //       { 'id': 'accounts', 'name': 'Accounts'}]}};

//  public static SETTINGS_NAVIGATION_OBJECT = { 'id': 'settings', 'name': 'Settings' };
// public static LANGUAGES: any = {
//         'ab': 'Abkhazian',
//         'ace': 'Achinese',
//         'ach': 'Acoli',
//         'ada': 'Adangme',
//         'ady': 'Adyghe',
//         'aa': 'Afar',
//         'afh': 'Afrihili',
//         'af': 'Afrikaans',
//         'afa': 'Afro-Asiatic Language',
//         'agq': 'Aghem',
//         'ain': 'Ainu',
//         'ak': 'Akan',
//         'akk': 'Akkadian',
//         'sq': 'Albanian',
//         'ale': 'Aleut',
//         'alg': 'Algonquian Language',
//         'tut': 'Altaic Language',
//         'am': 'Amharic',
//         'egy': 'Ancient Egyptian',
//         'grc': 'Ancient Greek',
//         'anp': 'Angika',
//         'apa': 'Apache Language',
//         'ar': 'Arabic',
//         'an': 'Aragonese',
//         'arc': 'Aramaic',
//         'arp': 'Arapaho',
//         'arn': 'Araucanian',
//         'arw': 'Arawak',
//         'hy': 'Armenian',
//         'rup': 'Aromanian',
//         'art': 'Artificial Language',
//         'as': 'Assamese',
//         'ast': 'Asturian',
//         'asa': 'Asu',
//         'ath': 'Athapascan Language',
//         'cch': 'Atsam',
//         'en_AU': 'Australian English',
//         'aus': 'Australian Language',
//         'de_AT': 'Austrian German',
//         'map': 'Austronesian Language',
//         'av': 'Avaric',
//         'ae': 'Avestan',
//         'awa': 'Awadhi',
//         'ay': 'Aymara',
//         'az': 'Azerbaijani',
//         'ksf': 'Bafia',
//         'ban': 'Balinese',
//         'bat': 'Baltic Language',
//         'bal': 'Baluchi',
//         'bm': 'Bambara',
//         'bai': 'Bamileke Language',
//         'bad': 'Banda',
//         'bnt': 'Bantu',
//         'bas': 'Basaa',
//         'ba': 'Bashkir',
//         'eu': 'Basque',
//         'btk': 'Batak',
//         'bej': 'Beja',
//         'be': 'Belarusian',
//         'bem': 'Bemba',
//         'bez': 'Bena',
//         'bn': 'Bengali',
//         'ber': 'Berber',
//         'bho': 'Bhojpuri',
//         'bh': 'Bihari',
//         'bik': 'Bikol',
//         'bin': 'Bini',
//         'bi': 'Bislama',
//         'byn': 'Blin',
//         'zbl': 'Blissymbols',
//         'brx': 'Bodo',
//         'bs': 'Bosnian',
//         'bra': 'Braj',
//         'pt_BR': 'Brazilian Portuguese',
//         'br': 'Breton',
//         'en_GB': 'British English',
//         'bug': 'Buginese',
//         'bg': 'Bulgarian',
//         'bua': 'Buriat',
//         'my': 'Burmese',
//         'cad': 'Caddo',
//         'en_CA': 'Canadian English',
//         'fr_CA': 'Canadian French',
//         'yue': 'Cantonese',
//         'car': 'Carib',
//         'ca': 'Catalan',
//         'cau': 'Caucasian Language',
//         'cay': 'Cayuga',
//         'ceb': 'Cebuano',
//         'cel': 'Celtic Language',
//         'cai': 'Central American Indian Language',
//         'tzm': 'Central Morocco Tamazight',
//         'chg': 'Chagatai',
//         'cmc': 'Chamic Language',
//         'ch': 'Chamorro',
//         'ce': 'Chechen',
//         'chr': 'Cherokee',
//         'chy': 'Cheyenne',
//         'chb': 'Chibcha',
//         'cgg': 'Chiga',
//         'zh': 'Chinese',
//         'chn': 'Chinook Jargon',
//         'chp': 'Chipewyan',
//         'cho': 'Choctaw',
//         'cu': 'Church Slavic',
//         'chk': 'Chuukese',
//         'cv': 'Chuvash',
//         'nwc': 'Classical Newari',
//         'syc': 'Classical Syriac',
//         'ksh': 'Colognian',
//         'swb': 'Comorian',
//         'swc': 'Congo Swahili',
//         'cop': 'Coptic',
//         'kw': 'Cornish',
//         'co': 'Corsican',
//         'cr': 'Cree',
//         'mus': 'Creek',
//         'crp': 'Creole or Pidgin',
//         'crh': 'Crimean Turkish',
//         'hr': 'Croatian',
//         'cus': 'Cushitic Language',
//         'cs': 'Czech',
//         'dak': 'Dakota',
//         'da': 'Danish',
//         'dar': 'Dargwa',
//         'day': 'Dayak',
//         'del': 'Delaware',
//         'din': 'Dinka',
//         'dv': 'Divehi',
//         'doi': 'Dogri',
//         'dgr': 'Dogrib',
//         'dra': 'Dravidian Language',
//         'dua': 'Duala',
//         'nl': 'Dutch',
//         'dyu': 'Dyula',
//         'dz': 'Dzongkha',
//         'frs': 'Eastern Frisian',
//         'efi': 'Efik',
//         'eka': 'Ekajuk',
//         'elx': 'Elamite',
//         'ebu': 'Embu',
//         'en': 'English',
//         'cpe': 'English-based Creole or Pidgin',
//         'myv': 'Erzya',
//         'eo': 'Esperanto',
//         'et': 'Estonian',
//         'ee': 'Ewe',
//         'ewo': 'Ewondo',
//         'fan': 'Fang',
//         'fat': 'Fanti',
//         'fo': 'Faroese',
//         'fj': 'Fijian',
//         'fil': 'Filipino',
//         'fi': 'Finnish',
//         'fiu': 'Finno-Ugrian Language',
//         'nl_BE': 'Flemish',
//         'fon': 'Fon',
//         'fr': 'French',
//         'cpf': 'French-based Creole or Pidgin',
//         'fur': 'Friulian',
//         'ff': 'Fulah',
//         'gaa': 'Ga',
//         'gl': 'Galician',
//         'lg': 'Ganda',
//         'gay': 'Gayo',
//         'gba': 'Gbaya',
//         'gez': 'Geez',
//         'ka': 'Georgian',
//         'de': 'German',
//         'gem': 'Germanic Language',
//         'gil': 'Gilbertese',
//         'gon': 'Gondi',
//         'gor': 'Gorontalo',
//         'got': 'Gothic',
//         'grb': 'Grebo',
//         'el': 'Greek',
//         'gn': 'Guarani',
//         'gu': 'Gujarati',
//         'guz': 'Gusii',
//         'gwi': 'Gwichʼin',
//         'hai': 'Haida',
//         'ht': 'Haitian',
//         'ha': 'Hausa',
//         'haw': 'Hawaiian',
//         'he': 'Hebrew',
//         'hz': 'Herero',
//         'hil': 'Hiligaynon',
//         'him': 'Himachali',
//         'hi': 'Hindi',
//         'ho': 'Hiri Motu',
//         'hit': 'Hittite',
//         'hmn': 'Hmong',
//         'hu': 'Hungarian',
//         'hup': 'Hupa',
//         'iba': 'Iban',
//         'pt_PT': 'Iberian Portuguese',
//         'es_ES': 'Iberian Spanish',
//         'is': 'Icelandic',
//         'io': 'Ido',
//         'ig': 'Igbo',
//         'ijo': 'Ijo',
//         'ilo': 'Iloko',
//         'smn': 'Inari Sami',
//         'inc': 'Indic Language',
//         'ine': 'Indo-European Language',
//         'id': 'Indonesian',
//         'inh': 'Ingush',
//         'ia': 'Interlingua',
//         'ie': 'Interlingue',
//         'iu': 'Inuktitut',
//         'ik': 'Inupiaq',
//         'ira': 'Iranian Language',
//         'ga': 'Irish',
//         'iro': 'Iroquoian Language',
//         'it': 'Italian',
//         'ja': 'Japanese',
//         'jv': 'Javanese',
//         'kaj': 'Jju',
//         'dyo': 'Jola-Fonyi',
//         'jrb': 'Judeo-Arabic',
//         'jpr': 'Judeo-Persian',
//         'kbd': 'Kabardian',
//         'kea': 'Kabuverdianu',
//         'kab': 'Kabyle',
//         'kac': 'Kachin',
//         'kl': 'Kalaallisut',
//         'kln': 'Kalenjin',
//         'xal': 'Kalmyk',
//         'kam': 'Kamba',
//         'kn': 'Kannada',
//         'kr': 'Kanuri',
//         'kaa': 'Kara-Kalpak',
//         'krc': 'Karachay-Balkar',
//         'krl': 'Karelian',
//         'kar': 'Karen',
//         'ks': 'Kashmiri',
//         'csb': 'Kashubian',
//         'kaw': 'Kawi',
//         'kk': 'Kazakh',
//         'kha': 'Khasi',
//         'km': 'Khmer',
//         'khi': 'Khoisan Language',
//         'kho': 'Khotanese',
//         'ki': 'Kikuyu',
//         'kmb': 'Kimbundu',
//         'rw': 'Kinyarwanda',
//         'ky': 'Kirghiz',
//         'tlh': 'Klingon',
//         'kv': 'Komi',
//         'kg': 'Kongo',
//         'kok': 'Konkani',
//         'ko': 'Korean',
//         'kfo': 'Koro',
//         'kos': 'Kosraean',
//         'khq': 'Koyra Chiini',
//         'ses': 'Koyraboro Senni',
//         'kpe': 'Kpelle',
//         'kro': 'Kru',
//         'kj': 'Kuanyama',
//         'kum': 'Kumyk',
//         'ku': 'Kurdish',
//         'kru': 'Kurukh',
//         'kut': 'Kutenai',
//         'nmg': 'Kwasio',
//         'lad': 'Ladino',
//         'lah': 'Lahnda',
//         'lam': 'Lamba',
//         'lag': 'Langi',
//         'lo': 'Lao',
//         'la': 'Latin',
//         'es_419': 'Latin American Spanish',
//         'lv': 'Latvian',
//         'lez': 'Lezghian',
//         'li': 'Limburgish',
//         'ln': 'Lingala',
//         'lt': 'Lithuanian',
//         'jbo': 'Lojban',
//         'nds': 'Low German',
//         'dsb': 'Lower Sorbian',
//         'loz': 'Lozi',
//         'lu': 'Luba-Katanga',
//         'lua': 'Luba-Lulua',
//         'lui': 'Luiseno',
//         'smj': 'Lule Sami',
//         'lun': 'Lunda',
//         'luo': 'Luo',
//         'lus': 'Lushai',
//         'lb': 'Luxembourgish',
//         'luy': 'Luyia',
//         'mk': 'Macedonian',
//         'jmc': 'Machame',
//         'mad': 'Madurese',
//         'mag': 'Magahi',
//         'mai': 'Maithili',
//         'mak': 'Makasar',
//         'mgh': 'Makhuwa-Meetto',
//         'kde': 'Makonde',
//         'mg': 'Malagasy',
//         'ms': 'Malay',
//         'ml': 'Malayalam',
//         'mt': 'Maltese',
//         'mnc': 'Manchu',
//         'mdr': 'Mandar',
//         'man': 'Mandingo',
//         'mni': 'Manipuri',
//         'mno': 'Manobo Language',
//         'gv': 'Manx',
//         'mi': 'Maori',
//         'mr': 'Marathi',
//         'chm': 'Mari',
//         'mh': 'Marshallese',
//         'mwr': 'Marwari',
//         'mas': 'Masai',
//         'myn': 'Mayan Language',
//         'men': 'Mende',
//         'mer': 'Meru',
//         'mic': 'Micmac',
//         'dum': 'Middle Dutch',
//         'enm': 'Middle English',
//         'frm': 'Middle French',
//         'gmh': 'Middle High German',
//         'mga': 'Middle Irish',
//         'min': 'Minangkabau',
//         'mwl': 'Mirandese',
//         'mis': 'Miscellaneous Language',
//         'ar_001': 'Modern Standard Arabic',
//         'moh': 'Mohawk',
//         'mdf': 'Moksha',
//         'mo': 'Moldavian',
//         'mkh': 'Mon-Khmer Language',
//         'lol': 'Mongo',
//         'mn': 'Mongolian',
//         'mfe': 'Morisyen',
//         'mos': 'Mossi',
//         'mun': 'Munda Language',
//         'mua': 'Mundang',
//         'nqo': 'N’Ko',
//         'nah': 'Nahuatl',
//         'naq': 'Nama',
//         'na': 'Nauru',
//         'nv': 'Navajo',
//         'ng': 'Ndonga',
//         'nap': 'Neapolitan',
//         'ne': 'Nepali',
//         'new': 'Newari',
//         'nia': 'Nias',
//         'nic': 'Niger-Kordofanian Language',
//         'ssa': 'Nilo-Saharan Language',
//         'niu': 'Niuean',
//         'zxx': 'No linguistic content',
//         'nog': 'Nogai',
//         'nai': 'North American Indian Language',
//         'nd': 'North Ndebele',
//         'frr': 'Northern Frisian',
//         'se': 'Northern Sami',
//         'nso': 'Northern Sotho',
//         'no': 'Norwegian',
//         'nb': 'Norwegian Bokmål',
//         'nn': 'Norwegian Nynorsk',
//         'nub': 'Nubian Language',
//         'nus': 'Nuer',
//         'nym': 'Nyamwezi',
//         'ny': 'Nyanja',
//         'nyn': 'Nyankole',
//         'tog': 'Nyasa Tonga',
//         'nyo': 'Nyoro',
//         'nzi': 'Nzima',
//         'oc': 'Occitan',
//         'oj': 'Ojibwa',
//         'ang': 'Old English',
//         'fro': 'Old French',
//         'goh': 'Old High German',
//         'sga': 'Old Irish',
//         'non': 'Old Norse',
//         'peo': 'Old Persian',
//         'pro': 'Old Provençal',
//         'or': 'Oriya',
//         'om': 'Oromo',
//         'osa': 'Osage',
//         'os': 'Ossetic',
//         'oto': 'Otomian Language',
//         'ota': 'Ottoman Turkish',
//         'pal': 'Pahlavi',
//         'pau': 'Palauan',
//         'pi': 'Pali',
//         'pam': 'Pampanga',
//         'pag': 'Pangasinan',
//         'pap': 'Papiamento',
//         'paa': 'Papuan Language',
//         'ps': 'Pashto',
//         'fa': 'Persian',
//         'phi': 'Philippine Language',
//         'phn': 'Phoenician',
//         'pon': 'Pohnpeian',
//         'pl': 'Polish',
//         'pt': 'Portuguese',
//         'cpp': 'Portuguese-based Creole or Pidgin',
//         'pra': 'Prakrit Language',
//         'pa': 'Punjabi',
//         'qu': 'Quechua',
//         'raj': 'Rajasthani',
//         'rap': 'Rapanui',
//         'rar': 'Rarotongan',
//         'roa': 'Romance Language',
//         'ro': 'Romanian',
//         'rm': 'Romansh',
//         'rom': 'Romany',
//         'rof': 'Rombo',
//         'root': 'Root',
//         'rn': 'Rundi',
//         'ru': 'Russian',
//         'rwk': 'Rwa',
//         'ssy': 'Saho',
//         'sah': 'Sakha',
//         'sal': 'Salishan Language',
//         'sam': 'Samaritan Aramaic',
//         'saq': 'Samburu',
//         'smi': 'Sami Language',
//         'sm': 'Samoan',
//         'sad': 'Sandawe',
//         'sg': 'Sango',
//         'sbp': 'Sangu',
//         'sa': 'Sanskrit',
//         'sat': 'Santali',
//         'sc': 'Sardinian',
//         'sas': 'Sasak',
//         'sco': 'Scots',
//         'gd': 'Scottish Gaelic',
//         'sel': 'Selkup',
//         'sem': 'Semitic Language',
//         'seh': 'Sena',
//         'see': 'Seneca',
//         'sr': 'Serbian',
//         'sh': 'Serbo-Croatian',
//         'srr': 'Serer',
//         'ksb': 'Shambala',
//         'shn': 'Shan',
//         'sn': 'Shona',
//         'ii': 'Sichuan Yi',
//         'scn': 'Sicilian',
//         'sid': 'Sidamo',
//         'sgn': 'Sign Language',
//         'bla': 'Siksika',
//         'zh_Hans': 'Simplified Chinese',
//         'sd': 'Sindhi',
//         'si': 'Sinhala',
//         'sit': 'Sino-Tibetan Language',
//         'sio': 'Siouan Language',
//         'sms': 'Skolt Sami',
//         'den': 'Slave',
//         'sla': 'Slavic Language',
//         'sk': 'Slovak',
//         'sl': 'Slovenian',
//         'xog': 'Soga',
//         'sog': 'Sogdien',
//         'so': 'Somali',
//         'son': 'Songhai',
//         'snk': 'Soninke',
//         'ckb': 'Sorani Kurdish',
//         'wen': 'Sorbian Language',
//         'sai': 'South American Indian Language',
//         'nr': 'South Ndebele',
//         'alt': 'Southern Altai',
//         'sma': 'Southern Sami',
//         'st': 'Southern Sotho',
//         'es': 'Spanish',
//         'srn': 'Sranan Tongo',
//         'suk': 'Sukuma',
//         'sux': 'Sumerian',
//         'su': 'Sundanese',
//         'sus': 'Susu',
//         'sw': 'Swahili',
//         'ss': 'Swati',
//         'sv': 'Swedish',
//         'fr_CH': 'Swiss French',
//         'gsw': 'Swiss German',
//         'de_CH': 'Swiss High German',
//         'syr': 'Syriac',
//         'shi': 'Tachelhit',
//         'tl': 'Tagalog',
//         'ty': 'Tahitian',
//         'tai': 'Tai Language',
//         'dav': 'Taita',
//         'tg': 'Tajik',
//         'tmh': 'Tamashek',
//         'ta': 'Tamil',
//         'trv': 'Taroko',
//         'twq': 'Tasawaq',
//         'tt': 'Tatar',
//         'te': 'Telugu',
//         'ter': 'Tereno',
//         'teo': 'Teso',
//         'tet': 'Tetum',
//         'th': 'Thai',
//         'bo': 'Tibetan',
//         'tig': 'Tigre',
//         'ti': 'Tigrinya',
//         'tem': 'Timne',
//         'tiv': 'Tiv',
//         'tli': 'Tlingit',
//         'tpi': 'Tok Pisin',
//         'tkl': 'Tokelau',
//         'to': 'Tongan',
//         'zh_Hant': 'Traditional Chinese',
//         'tsi': 'Tsimshian',
//         'ts': 'Tsonga',
//         'tn': 'Tswana',
//         'tum': 'Tumbuka',
//         'tup': 'Tupi Language',
//         'tr': 'Turkish',
//         'tk': 'Turkmen',
//         'tvl': 'Tuvalu',
//         'tyv': 'Tuvinian',
//         'tw': 'Twi',
//         'kcg': 'Tyap',
//         'en_US': 'United States (English)',
//         'udm': 'Udmurt',
//         'uga': 'Ugaritic',
//         'ug': 'Uighur',
//         'uk': 'Ukrainian',
//         'umb': 'Umbundu',
//         'und': 'Unknown Language',
//         'hsb': 'Upper Sorbian',
//         'ur': 'Urdu',
//         'uz': 'Uzbek',
//         'vai': 'Vai',
//         've': 'Venda',
//         'vi': 'Vietnamese',
//         'vo': 'Volapük',
//         'vot': 'Votic',
//         'vun': 'Vunjo',
//         'wak': 'Wakashan Language',
//         'wal': 'Walamo',
//         'wa': 'Walloon',
//         'wae': 'Walser',
//         'war': 'Waray',
//         'was': 'Washo',
//         'cy': 'Welsh',
//         'fy': 'Western Frisian',
//         'wo': 'Wolof',
//         'xh': 'Xhosa',
//         'yav': 'Yangben',
//         'yao': 'Yao',
//         'yap': 'Yapese',
//         'yi': 'Yiddish',
//         'yo': 'Yoruba',
//         'ypk': 'Yupik Language',
//         'znd': 'Zande',
//         'zap': 'Zapotec',
//         'dje': 'Zarma',
//         'zza': 'Zaza',
//         'zen': 'Zenaga',
//         'za': 'Zhuang',
//         'zu': 'Zulu',
//         'zun': 'Zuni'
//     };

      // public static TIME_ZONES: any = {
      //   'America/Los_Angeles': 'Pacific Standard Time',
      //   'America/New_York': 'Eatern Standard Time',
      //   'Asia/Calcutta': 'Indian Standard Time',
      //   'Asia/Kolkata': 'Indian Standard Time'
      //  };
//}
// TemplateStringsArray
// fromPromise

// https://forum.ionicframework.com/t/get-subscribe-data-out-of-function/76612/2
// https://angular.io/guide/http

// # RxJS
// 1) Pipes in Angular: A pipe takes in data as input and transforms it to the desired output
// https://angular.io/guide/pipes

// 2) pipe() function in RxJS: You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.

// RxJS Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections.

// For example, RxJS defines operators such as map(), filter(), concat(), and flatMap().
// You can use pipes to link operators together. Pipes let you combine multiple functions into a single function.

// https://stackoverflow.com/questions/52934247/angular-observer-catch-error-on-component
// https://www.c-sharpcorner.com/article/handling-errors-in-angular/
// https://stackblitz.com/edit/global-error-catching-angular?file=app%2Fapp.module.ts
// https://stackblitz.com/github/melcor76/global-error-handling?file=src%2Fapp%2Fapp.module.ts

// good- use for experiment
// github-uh3oom
// github-unklbx

// Working Code
// angular-fkn3z8


  //  <div class="container">    
  //   <!-- <form class="mat-dialog-content" (ngSubmit)="editManager(ngForm)" #formControl="ngForm">    -->
  //     <div>Manager Name: {{data.managerName}}</div>
  //     <div>Manager Product: {{data.managerProduct}}</div>      
  //     <!-- <form #editManagerForm="ngForm" (ngSubmit)="onSubmit(editManagerForm)">    -->
  //     <form [formGroup]= "editManagerForm" (ngSubmit)="editManager(editManagerForm)">
  //     <input type='hidden' formControlName="managerId">
  //     <input type='hidden' formControlName="productId">
  //     <input type='hidden' formControlName="managerName">
  //     <input type='hidden' formControlName="managerProduct">
  //     <div class="t11pxB">Start Date</div>
  //     <div class="form">
  //       <!-- <mat-form-field>
  //         <input matInput #input class="form-control" placeholder="Startdate" [(ngModel)]="data.id" name="id" required >
  //         <mat-error *ngIf="formControl.invalid">{{getErrorMessage()}}</mat-error>
  //       </mat-form-field> -->        
  //           <mat-form-field floatLabel="never">
  //             <!-- <mat-select [(value)]="element.fav" placeholder="Startdate"> -->              
  //             <!-- <mat-select (selectionChange)="startDatePick($event)" name="assignMgrStartDateList" [(ngModel)]="data.assignMgrStartDateList" > -->
  //             <mat-select (selectionChange)="startDatePick($event)" formControlName="assignMgrStartDateList" [(ngModel)]="data.assignMgrStartDateList">
  //               <mat-option value="asOfDate">As of Date</mat-option>
  //               <mat-option value="allHistory">All History</mat-option>
  //             </mat-select>
  //           </mat-form-field>            
  //           <!-- <mat-form-field appearance="outline" class="width-medium">
  //               <mat-select formControlName = "acctType"><!--[(value)] = "selectedAccountType"--
  //                 <mat-option *ngFor = "let type of typeRadioButtonContent" id = "acctType" [value] = "type.code"> 
  //                   {{type.description}}</mat-option> <!-- --
  //                 </mat-select>
  //               </mat-form-field> -->
  //     </div>      
  //     <div *ngIf="startDateDivShow" class="form">
  //         <mat-form-field>
  //             <!-- <input matInput [matDatepicker]="picker" placeholder="Choose a date" name="startDate" [(ngModel)]="data.startDate"> -->
  //             <!-- <input matInput [matDatepicker]="picker" placeholder="Choose a date" formControlName="startDate" [value]="data.startDate" [(ngModel)]="data.startDate"> -->
  //           <input matInput [matDatepicker]="picker" placeholder="Choose a date" formControlName="startDate">
  //           <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  //           <mat-datepicker #picker></mat-datepicker>
  //         </mat-form-field>          
  //         <mat-error *ngIf="editManagerForm.hasError('startDateNull')">
	// 				  <i class="fa fa-times-circle"></i> Please enter a valid start date.
  //         </mat-error>
  //         <mat-error *ngIf="editManagerForm.hasError('startDateGTendDate')">
  //           <i class="fa fa-times-circle"></i> Start Date should be before termination date.
  //         </mat-error>
  //         <mat-error *ngIf="editManagerForm.hasError('startDateGTcurrentDate')">
  //           <i class="fa fa-times-circle"></i> Start Date should be before current date.
  //         </mat-error>
  //     </div>
  //     <div class="t11pxB">End Date</div>
  //     <div class="form">          
  //             <!-- <mat-form-field floatLabel="never" >                
  //               <!-- <mat-select (selectionChange)="endDatePick($event)" name="assignMgrEndDateList" [(ngModel)]="data.assignMgrEndDateList"> --
  //               <mat-select (selectionChange)="endDatePick($event)" formControlName="assignMgrEndDateList" [(ngModel)]="data.assignMgrEndDateList">
  //                 <mat-option value="asOfDate">As of Date</mat-option>
  //                 <mat-option value="current">Current</mat-option>
  //               </mat-select>
  //             </mat-form-field> -->
              
  //             <mat-form-field floatLabel="never" >                
  //               <!-- <mat-select (selectionChange)="endDatePick($event)" name="assignMgrEndDateList" [(ngModel)]="data.assignMgrEndDateList"> -->
  //               <mat-select (selectionChange)="endDatePick($event)" formControlName="assignMgrEndDateList" [(ngModel)]="data.assignMgrEndDateList">
  //                 <mat-option *ngFor = "let type of assignMgrEndDateListOption" [value] = "type.code"> {{type.description}}</mat-option>
  //               </mat-select>
  //             </mat-form-field>
  //       </div>      
  //       <div *ngIf="endDateDivShow" class="never">
  //           <mat-form-field>
  //             <!-- <input matInput [matDatepicker]="picker1" placeholder="Choose a date" formControlName="endDate" [value]="data.endDate" [(ngModel)]="data.endDate"> -->
  //             <input matInput [matDatepicker]="picker1" placeholder="Choose a date" formControlName="endDate">
  //             <mat-datepicker-toggle matSuffix [for]="picker1"></mat-datepicker-toggle>
  //             <mat-datepicker #picker1></mat-datepicker>
  //           </mat-form-field>
  //           <mat-error *ngIf="editManagerForm.hasError('endDateNull')">
  //             <i class="fa fa-times-circle"></i> Please enter a valid end date.
  //           </mat-error>
  //           <mat-error *ngIf="editManagerForm.hasError('endDateGTcurrentDate')">
  //             <i class="fa fa-times-circle"></i> Termination Date should be on or before current date.
  //           </mat-error>
  //       </div>
  //     <div mat-dialog-actions>
  //       <!-- <button mat-button [type]="submit" [disabled]="!formControl.valid" [mat-dialog-close]="1" (click)="editManager()">Save</button>-->        
  //       <button mat-button class="btn" type="submit">Submit</button>&nbsp;
  //       <!-- <button mat-button (click)="onNoClick()" tabindex="-1">Cancel</button> -->
  //       <a mat-button class="btn neg" (click)="onNoClick()" tabindex="-1">Cancel</a>
  //     </div>
  //   </form>
  // </div>

  //////////////////////


//   import { Component, Inject } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
// import { formatDate } from '@angular/common';
// import { MatSelectModule, MatInputModule, MatButtonModule, MatDatepickerModule } from '@angular/material';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// import { fromPromise } from 'rxjs/internal/observable/fromPromise';
// import { ManagerhistoryService } from '../../services/managerhistory.service';
// import { DataService } from '../../services/data.service';
// @Component({
//   selector: 'app-edit-manager-dialog',
//   templateUrl: './edit-manager-dialog.component.html',
//   styleUrls: ['./edit-manager-dialog.component.css']
// })
// export class EditManagerDialogComponent {
//  startDateDivShow: boolean;
//  endDateDivShow: boolean;
//  editManagerForm;
//  scrDefConst: String;
//  command: String;
//  formatType: String;
//  managerName: any;
//  managerProduct: any;
//  managerId: any;
//  productId: any;
//  assignMgrStartDateList: any;
//  startDate: any;
//  assignMgrEndDateList: any;
//  endDate: any;
//  submitted = false;
//  currentDate: Date;
//  startDateMessage;
//  endDateMessage;
//  assignMgrEndDateListOption: boolean;
//  message;
//  constructor (
//   public dialogRef: MatDialogRef<EditManagerDialogComponent>,
//   @Inject(MAT_DIALOG_DATA) public data: any,
//   private appService: ManagerhistoryService,
//   private dataServices: DataService,
//   private formBuilder: FormBuilder) {
//    this.currentDate = new Date();
//    this.dataServices.retainCurrentData.subscribe((message: any) => {
//     console.log('RETAINVALUES-IN-COMPONENT', message);
//     console.log(message);
//    });
//    // this.message = '';
//    if ( this.message === 1) {
//     const item: any[] = [{
//      'endDateList' : [
//       { code: 'asOfDate', description: 'As Of Date' },
//       { code: 'allHistory', description: 'Current' }
//      ]
//     }];
//     this.assignMgrEndDateListOption = item[0].endDateList;
//    } else {
//     // this.assignMgrEndDateListOption = true;
//     const item: any[] = [{
//      'endDateList': [ { code: 'asOfDate', description: 'As Of Date' } ]
//     }];
//     this.assignMgrEndDateListOption = item[0].endDateList;
//    }
//    console.log('assignMgrEndDateListOption');
//    console.log(this.assignMgrEndDateListOption);
//    if (data.startDate) {
//     this.startDateDivShow = true;
//     data.assignMgrStartDateList = 'asOfDate';
//     // this.startDate = this.dateFormat(data.startDate);
//     // this.startDate = data.startDate;
//     // this.startDate = formatDate(data.startDate, 'MM/dd/yyyy', 'en-US');
//    }
//    if (data.endDate) {
//     this.endDateDivShow = true;
//     data.assignMgrEndDateList = 'asOfDate';
//     // this.assignMgrEndDateListOption = false;
//     // this.endDate = data.endDate;
//     // this.endDate = formatDate(data.endDate, 'MM/dd/yyyy', 'en-US');
//    }
//    /* this.mgrName = data.mgrName;
//    this.mgrProduct = data.mgrProduct;
//    this.managerId = data.managerId;
//    this.productId = data.productId; */
//    this.editManagerForm = this.formBuilder.group({
//     managerId: [''],
//     productId: [''],
//     managerName: [''],
//     managerProduct: [''],
//     assignMgrStartDateList: [''],
//     startDate: [new Date(data.startDate)],
//     assignMgrEndDateList: [''],
//     endDate: [new Date(data.endDate)],
//     currentDate: ['']
//    }, { validator: this.checkDates });

//    this.editManagerForm.patchValue({
//     // assignMgrStartDateList: 'asOfDate',
//     managerName: data.managerName,
//     managerProduct: data.managerProduct,
//     productId: data.managerId,
//     managerId: data.managerId,
//     assignMgrStartDateList: data.assignMgrStartDateList,
//     // startDate: new Date(data.startDate),
//     assignMgrEndDateList: data.assignMgrEndDateList,
//     // endDate: new Date(data.endDate),
//     // currentDate: this.currentDate
//     currentDate: formatDate(this.currentDate, 'MM/dd/yyyy', 'en-US')
//    });
//   }
//  /* formControl = new FormControl('', [
//   Validators.required
//   // Validators.email,
//  ]); */
//  /* dateFormat(value: any): Date | null {
//   console.log('dateFormat');
//   console.log(value)
//   if ((typeof value === 'string') && (value.indexOf('-') > -1)) {
//     const str = value.split('-');
//     const year = Number(str[2]);
//     const month = Number(str[1]) - 1;
//     const date = Number(str[0]);
//     return new Date(year, month, date);
//   }
//   const timestamp = typeof value === 'number' ? value : Date.parse(value);
//   return isNaN(timestamp) ? null : new Date(timestamp);
//  } */
//  getErrorMessage() {
//   // return this.formControl.hasError('required') ? 'Required field' :
//   // this.formControl.hasError('email') ? 'Not a valid email' :'';
//  }
//  submit() {
//   // emppty stuff
//  }
//  onNoClick(): void {
//   this.dialogRef.close();
//  }
//  checkDates(group: FormGroup) {
//   console.log('checkDates');
//   console.log(group);
//   if ((group.controls.startDate.value === undefined || group.controls.startDate.value === null) && group.controls.assignMgrStartDateList.value === 'asOfDate') {
//    return { startDateNull : true };
//   }
//   if ((group.controls.endDate.value === undefined || group.controls.endDate.value === null) && group.controls.assignMgrEndDateList.value === 'asOfDate') {
//    return { endDateNull : true };
//   }
//   if (group.controls.endDate.value < group.controls.startDate.value) {
//    return { startDateGTendDate : true };
//   }
//   if (group.controls.currentDate.value < group.controls.startDate.value) {
//    return { startDateGTcurrentDate : true };
//   }
//   if (group.controls.currentDate.value < group.controls.endDate.value) {
//    return { endDateGTcurrentDate : true };
//   }
//   return null;
//  }
//  editManager(form) {
//   console.log ('in Component - addManager');
//   console.log (form.value);
//   console.log('Date Validation');
//   console.log(this.editManagerForm.hasError('startDateGTendDate'));
//   this.submitted = true;
//   this.scrDefConst = 'managerEdit';
//   this.command = 'managerEdit';
//   this.formatType = 'html';
//   this.managerName = form.value.managerName;
//   this.managerProduct = form.value.managerProduct;
//   this.managerId = form.value.managerId;
//   this.productId = form.value.productId;
//   // this.startDate = form.value.startDate;
//   // this.startDate = this.dateFormat(form.value.startDate);
//   this.assignMgrStartDateList = form.value.assignMgrStartDateList;
//   this.assignMgrEndDateList = form.value.assignMgrEndDateList;
//   console.log('assignMgrStartDateList');
//   console.log(this.assignMgrStartDateList);
//   console.log('assignMgrEndDateList');
//   console.log(this.assignMgrEndDateList);
//   if (this.assignMgrStartDateList === 'allHistory') {
//    this.startDate = '';
//   } else {
//    this.startDate = formatDate(form.value.startDate, 'MM/dd/yyyy', 'en-US');
//   }
//   if (this.assignMgrStartDateList === 'current') {
//    this.endDate = '';
//   } else {
//    this.endDate = formatDate(form.value.endDate, 'MM/dd/yyyy', 'en-US');
//   }
//   console.log('STARTDATE');
//   console.log(this.startDate);
//   console.log('ENDDATE');
//   console.log(this.endDate);
//   let advEditFormMapData =  new Map();
//   advEditFormMapData.set('scrDefConst', this.scrDefConst);
//   advEditFormMapData.set('command', this.command);
//   advEditFormMapData.set('formatType', this.formatType);
//   advEditFormMapData.set('mgrName', this.managerName);
//   advEditFormMapData.set('mgrProduct', this.managerProduct);
//   advEditFormMapData.set('assignMgrStartDateList', this.assignMgrStartDateList);
//   advEditFormMapData.set('startDate', this.startDate);
//   advEditFormMapData.set('assignMgrEndDateList', this.assignMgrEndDateList);
//   advEditFormMapData.set('endDate', this.endDate);
//   let advEditPromiseRsp = this.appService.editManager(advEditFormMapData);
//   // console.log('Component Result - advAddPromiseRsp');
//   // console.log(advAddPromiseRsp);
//   const data = fromPromise(advEditPromiseRsp);
//   console.log('Component Result - data');
//   console.log(data);
//   data.subscribe (
//    (res: any) => {
//     // this.advAddMessage = res;
//    },
//    (err) => console.log(err)
//   );
//   // }
//  }
//  startDatePick(form) {
//   console.log('in startDatePick');
//   console.log(form);
//   if (form.value !== 'allHistory') {
//    this.startDateDivShow = true;
//   } else if (form.value === 'allHistory') {
//    this.startDateDivShow = false;
//   }
//  }
//  endDatePick(form) {
//   console.log('in endDatePick');
//   console.log(form);
//   if (form.value !== 'allHistory') {
//    this.endDateDivShow = true;
//   } else if (form.value === 'allHistory') {
//    this.endDateDivShow = false;
//   }
//  }
// }



// https://stackblitz.com/github/riyadali/townofbabylon/?file=src%2Fapp%2Fin-memory-data.service.ts

// ******* How to use Gloabl *******
// https://stackblitz.com/edit/angular-x32any
// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2

// ******** taking different file for DEV / INT and PROD*********

// https://blog.usejournal.com/how-to-map-rest-api-data-using-decorator-pattern-in-angular-6-94eb49ba16b1

// Angular HttpClient modify response in service
// https://stackoverflow.com/questions/47617169/angular-httpclient-modify-response-in-service

// MAT autocomplete ********************
// https://stackblitz.com/github/bithost-gmbh/ngx-mat-select-search-example
// https://stackblitz.com/edit/autocomplete-force-selection-tests-w2fqww?file=app%2Fapp.component.html
// https://stackblitz.com/edit/angular-material-autocomplete-async2?file=src%2Fapp%2Fin-memory-data.service.ts
// https://stackblitz.com/edit/angular-material2-issue-wmgcaj
// How to use the force-item-list on the mat-autocomplete

// https://stackoverflow.com/questions/40171914/what-is-the-difference-between-formcontrolname-and-formcontrol

// advisorId: any | undefined;
// const data = fromPromise(advCancelPromiseRsp );

// export class BalancesLabels {
//     // Balance Field Labels
//     static TOTAL_BALANCE: string = 'NXP_BALANCES.SUMMARY.TOTAL_BALANCE';
//     static TOTAL_ACCOUNT_WORTH: string = 'NXP_BALANCES.SUMMARY.TOTAL_ACCOUNT_WORTH';
//     static TOTAL_ACCOUNTS_WORTH: string = 'NXP_BALANCES.SUMMARY.TOTAL_ACCOUNTS_WORTH
// }

// export class RoleLookupUtils {
//     static ROLE_NAMES: string[] = ['System Feature', 'FI Role',
//       'AWR Login Role', 'MGT Role', 'Compliance Role', 'ASST Role', 'Display All'];
// }

// ////

// data.subscribe(
//       (res: any) => {
//         this.initForm(res);
//       },
//       err => {
//         if (err.status === 200 && err.error.text.indexOf('/LoginInitServ') !== -1) {
//           console.log('Logging out', err.status);
//           const event = new MouseEvent('click', {});
//           this.logoutReference.nativeElement.dispatchEvent(event);
//         }
//       }
// );

// initForm(res) {
//     console.log('initForm');
//     console.log(res);
//     console.log(res[0]);
//     console.log('JSON response for SelectedAccountViewable');
//     console.log(res[0].selectedAccountViewable);
//     this.viewRadioButtonContent = res[0].AccountViewable;
//     this.methodRadioButtonContent = res[0].AccountingMethod;
//     this.typeRadioButtonContent = res[0].AccountType;
//     this.editManualAcctForm = this.fb.group({
//       acctNo: [''],
//       acctName: ['', [Validators.required]],
//       acctMethod: [''],
//       acctView: [''],
//       acctType: ['']
//     });
//     this.editManualAcctForm.patchValue({
//        acctName: res[0].AccountName,
//        acctView: res[0].selectedAccountViewable === 'true' ? 'Y' : res[0].selectedAccountViewable,
//        acctType: res[0].selectedAccountType,
//        acctMethod: res[0].selectedAccountingMethod
//     });
//     this.InvName = res[0].InvestorName;
//     this.InvSSN = res[0].InvestorSSN;
//     this.AcctNo = res[0].AccountNo;
//   }

//  public buildFormVariables() {
//       username: String;
//       firstName: String;
//       lastName: String;
//       gender: String;
//       currentDate: Date;
//       country: String;
//       street: String;
//       city: String;
//       zip: Number;
//       state: String;
//       location: String;
//       language: String;
//       region: String;
//       role: String;
//       fontSize: String;
//       skill: String;
//       email: String;
//       password: String;
//       mgrOption: Boolean;
//       heros: String;
//       tasks: String;
//   }    


// https://codehandbook.org/how-to-implement-auto-complete-in-angular-4/

// https://stackoverflow.com/questions/46268259/clear-angular-material-autocomplete-after-selection
// https://code-maze.com/angular-material-form-validation/