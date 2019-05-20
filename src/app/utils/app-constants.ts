export class AppConstants {

  public static CHILD_HOME_NAVIGATION_OBJECT: any = 
      {'id':  'household',  'name':  'Household',      
       'group':   {'id':  'lists',  'name':  'Lists' ,
       children: [
          { 'id': 'household', 'name': 'Household'},
          { 'id': 'accounts', 'name': 'Accounts'}
       ]
      }
      };

    public static TIME_ZONES: any = {
        'America/Los_Angeles': 'Pacific Standard Time',
        'America/New_York': 'Eatern Standard Time',
        'Asia/Calcutta': 'Indian Standard Time',
        'Asia/Kolkata': 'Indian Standard Time'
    };

    public static SETTINGS_NAVIGATION_OBJECT = { 'id': 'settings', 'name': 'Settings' };

    // public static ALL_SKILLS = [
    //   {name: 'Java', displayName: 'Java'},
    //   {name: 'Angular', displayName: 'Angular'},
    //   {name: 'Dot Net', displayName: 'Dot Net'}
    // ];

    public static ALL_FONT_SIZE = [
      {id: '10', displayName: '10px'},
      {td: '15', displayName: '15px'},
      {id: '20', displayName: '20px'}
   ];


}