import { Component, OnInit , Input } from '@angular/core';
import {User} from '../user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
   @Input('user')
   user:User;
   
   isCollapsed: boolean=true;


/*   @Input('name')
   userName:string;
   */
  /* @Input('user')
   userObj:User;*/

  constructor() {

  
}

  ngOnInit() {

  	/*this.user={

   		name:this.userObj.name,
   		title:this.userObj.designation,
   		address:this.userObj.address,
   		phone:this.userObj.phone		
   };*/

  }

  ngOnChanges(){

  }

   toggleCollapse(){
   	this.isCollapsed= !this.isCollapsed;
   }
}
