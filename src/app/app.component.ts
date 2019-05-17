import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
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

   private loading: boolean = false;
  // private results: Observable<SearchItem[]>;
  private searchField: FormControl;

  // private userResults: Observable<User[]>;
  public userResults: Observable<User[]>;
  // userResults: Observable<User[]>;

  constructor(private commonappservice: CommonAppService) { }

  ngOnInit() {
    this.getUser(1);
    this.fetchUserRecord(1);

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
            console.log(' 3 this.userResults data = ' +data.id + ' firstName = ' + data.firstName);
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

//export class PortalConstants {
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