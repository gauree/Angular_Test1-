import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingIntro';

  routes=[

  	{ linkname:'home',url:'home'},
  	{ linkname:'settings',url:'settings'}

  ];
}
