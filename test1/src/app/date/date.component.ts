import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  dateMessage :string ;

  constructor() {
    setInterval(()=> {
    			let currentDate = new Date();
  				this.dateMessage = currentDate.toDateString()+" "+ currentDate.toLocaleTimeString();
  				 }
  				 ,1000);

  			 }


  ngOnInit() {
 			 }

   addNumbers(a:number,b:number,c:number =0):number{
   	  return a+b+c;
   }

}
