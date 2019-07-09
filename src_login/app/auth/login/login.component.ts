import { Component, OnInit } from '@angular/core';
import { LoginService} from'../../services/login.service';
import{ FormGroup, FormControl , FormBuilder , Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup;
   passwordLength=0;
  constructor( private ls:LoginService , private fb:FormBuilder) { }

  ngOnInit() {

   /* this.loginForm= new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });*/
    
    //second way of initialising FormGroup
    this.loginForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['']

    })


    this.loginForm.get('password').valueChanges
                    .subscribe((value :string)=>
                      this.passwordLength=value.length)

    }
  

  login(){
  	console.log("method is called ");
    console.log(this.loginForm.value);
  	this.ls.login(this.loginForm.value);
  }

  onSubmit(){
    console.log("its getting called");
  }
}
