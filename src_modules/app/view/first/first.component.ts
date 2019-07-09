import { Component, OnInit, Input } from '@angular/core';
import {TestService} from '../../test.service'
import{ HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

	
	userName:string;
  response:any;
  postResponse:any;

  constructor(private svc:TestService, private http:HttpClient) {

 	 svc.printToConsole("from view module's first component");
 
   }


search(){
     
     this.http.get('https://api.github.com/users/'+ this.userName)
       .subscribe((response)=>{
           console.log(response);
           this.response=response});
     
  }

  postCall(){

    this.http.post('https://reqres.in/api/users',
    {
        name: 'paul ruddkjlj',
        movies: ['I Love You Man', 'Role Models']
    }).subscribe((postResponse)=>{
           console.log(postResponse);
           this.postResponse=postResponse});
     
  }


}
