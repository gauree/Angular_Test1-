import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService} from'../services/login.Service';
import{ ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  exports:[LoginComponent, RegisterComponent],
  providers:[LoginService]
})
export class AuthModule { }
