import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  position='Coach'
  work_experience= 10
  email= 'apunzalan500@gmail.com'
  website = 'https://facebook.com/'
  phone = '09612609123'

  imageUrl:string='assets/picture.jpg';
  imageW:number = 110;
  imageH:number = 100;

}
