import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Using ngIf to toggle text display
  showText: boolean = true;

  toggleText() {
    this.showText = !this.showText;
}
staff = [ 
  { firstName: 'Aaron', lastName: 'Punzalan', email: 'aaron@gmail.com', role: 'Owner' },   
  { firstName: 'Patrick', lastName: 'Perez', email: 'patrick@gmail.com', role: 'Employee' }, 
  { firstName: 'Archie', lastName: 'Custodio', email: 'archie@gmail.com', role: 'Employee' }, 
  { firstName: 'J', lastName: 'Zulueta', email: 'j@gmail.com', role: 'Employee' }, 
  { firstName: 'CJ', lastName: 'Crisostomo', email: 'cj@gmail.com', role: 'Employee' } 
  ];
}
