import { Component } from '@angular/core';
import {Observable, map, interval} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  time$: Observable<Date>;
  title = 'midterms';
  name = 'Aaron Punzalan';
  subject = 'Advanced Dynamic Web Applications'
  presentDate = new Date();
  pesoprice : number = 55;
  dollarprice : number = 0.018;
  pesoprices : number = 5588;
  decimalNum1 : number = 1.2565;
  decimalNum2 : number = 2.4549;
  decimalNum3 : number = 3.7854;
  a = 888.88888;
  b = 777.77777;
  c = 666.66666;

  Perfumes = ['Versace Eros', 'Dior Sauvage', 'Bleu De Channel', 'Versace Dylan Blue', 'Tom Ford Tobacco Vanille','CK One'];

  data: object = {
    name:"Aaron", age: 21, food: 'tinolang dinosaur',
    hobbies:[
      {hobby: 'Basketball', percent: '90%'},
      {hobby: 'Playing Online Games', percent: '80%'},
      {hobby: 'Listening to Music', percent: '95%'}
    ]
  }
  constructor() {
    this.time$ = interval(1000).pipe(map(()=> new Date()))
  }
}

