import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world2',
  templateUrl: './hello-world2.component.html',
  styleUrls: ['./hello-world2.component.css']
})
export class HelloWorld2Component implements OnInit {

	message:string="hey there!!" ;

  constructor() { }

  ngOnInit() {
  }

}
