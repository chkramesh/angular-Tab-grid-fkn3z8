import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Task } from '../app/models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id: 41,
        first_name: "Joan",
        last_name: "Brown",
        user_name: "jbrown",
        country: "Canada",
    },
    {
        id: 40,
        first_name: "Mort",
        last_name: "Johnston",
        user_name: "morty",
        country: "Canada",
    },
    {
        id: 42,
        first_name: "Sally",
        last_name: "Johns",
        user_name: "smothers",
        country: "Canada",
    },
    {
        id: 39,
        first_name: "Kat",
        last_name: "Preston",
        user_name: "kipreston",
        country: "United States",
    },
    {
        id: 34,
        first_name: "James",
        last_name: "Preston",
        user_name: "jpreston",
        country: "United States",
    },
    {
        id: 43,
        first_name: "Anya",
        last_name: "Promaski",
        user_name: "anyapro",
        country: "United States",
    },
    {
        id: 44,
        first_name: "Elena",
        last_name: "Savkin",
        user_name: "esavkin",
        country: "United States",
    },
    {
        id: 45,
        first_name: "Johan",
        last_name: "Severson",
        user_name: "jsever",
        country: "United States",
    },
    {
        id: 46,
        first_name: "Kathya",
        last_name: "Smith",
        user_name: "ksmith",
        country: "United States",
    },
    {
        id: 47,
        first_name: "Bill",
        last_name: "Lewis",
        user_name: "blewis",
        country: "United States",
    }
    ];

    const countryList = [
      {
        id: 41,
        first_name: "Joan",
        last_name: "Brown",
        user_name: "jbrown",
        country: "Canada",
    },
    {
        id: 40,
        first_name: "Mort",
        last_name: "Johnston",
        user_name: "morty",
        country: "Canada",
    },
    
    ];

     let skills = [
        {name: 'Java', displayName: 'Java'},
        {name: 'Angular', displayName: 'Angular'},
        {name: 'Dot Net', displayName: 'Dot Net'}
    ];

    
    // let tasks = [
    //   {    id: 1,    description: 'Buy Groceries'},
    //   {    id: 2,    description: 'Paint the garage' },
    //   {    id: 3,    description: 'No Task' }
    // ];

     let tasks : Task[] = [
      {    id: 1,    description: 'Buy Groceries'},
      {    id: 2,    description: 'Paint the garage' },
      {    id: 3,    description: 'No Task' }
    ];

  //    public static HEROES: Hero[] = [
  //     { id: 11, name: 'Mr. Nice' },
  //     { id: 12, name: 'Narco' },
  //     { id: 13, name: 'Bombasto' },
  //     { id: 14, name: 'Celeritas' },
  //     { id: 15, name: 'Magneta' },
  //     { id: 16, name: 'RubberMan' },
  //     { id: 17, name: 'Dynama' },
  //     { id: 18, name: 'Dr IQ' },
  //     { id: 19, name: 'Magma' },
  //     { id: 20, name: 'Tornado' }
  //  ];

    let user = [
      { id: 1, username:'jbrown', firstName: 'Windstorm', lastName: 'WindstormL', gender:'M', country:'USA', street:'1 Main St', city:'Edison', zip: 12345, state:'NJ', location:'USA', language: 'Eng', region:'EAST', role: 'admin', skill: 'Java', task: 1, hero: 11, font: '10'},
      { id: 1, username:'johns', firstName: 'John', lastName: 'smith', gender:'M', country:'USA', street:'1 Main St', city:'Edison', zip: 12345, state:'NY', location:'USA', language: 'Eng', region:'west',role: 'manager', skill: 'Angular', task: 1, hero: 12, font: '15'},
      { id: 1, username:'mortj', firstName: 'Mort', lastName: 'Johnston', gender:'M', country:'USA', street:'1 Main St', city:'Edison', zip: 12345, state:'NJ', location:'USA', language: 'Eng', region:'Midwest',role: 'regular', skill: 'Java', task: 1, hero: 13, font: '15'},
      { id: 1, username:'maryl', firstName: 'Mary', lastName: 'Linda', gender:'F', country:'CAN', street:'1 Main St', city:'Edison', zip: 12345, state:'PA', location:'CAN', language: 'french', region:'',role: 'regular', skill: 'Java', task: 1, hero: 14, font: '15'},
    ];

    return { members, countryList, skills, user, tasks };
  }


}