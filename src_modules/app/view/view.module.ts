import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { FirstComponent } from './first/first.component';
import { TestService } from '../test.service';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
  FirstComponent
  ],
  providers: [TestService]
})
export class ViewModule { }
