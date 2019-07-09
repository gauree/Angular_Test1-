import { Component } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user:User;

  inputdata:string ="hello";

  constructor(){
  		this.user={

   		name:'Gauri Desai',
   		designation:'Software Developer',
   		address:'1234, Main st. ,city, state',
   		phone:['1234-1234-123','4567-4567-4567']		
   };
  }
}
