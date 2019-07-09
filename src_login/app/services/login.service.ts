import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(lObj){
   	this.http.post('https://reqres.in/api/login',
   					lObj
   				   ).subscribe(
   				   (response)=>console.log(response),
   				   (error)=>console.log("its an error"));
   }
}
