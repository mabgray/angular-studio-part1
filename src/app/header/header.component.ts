import { Component, OnInit } from '@angular/core';
//the selector: app-header could be header 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName: string = "Mars 2030"
  rocketName: string = "Plasma Max"
  constructor() { };

  ngOnInit() {
  }

}
