import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent} from './auth/login/login.component';

const routes: Route[] = [

{ path:'', component :LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
