import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UserM';
  sideBarOpen = true;
  constructor(){

  }

  ngOnInit(): void {
    
  }

  sideBarToogler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
