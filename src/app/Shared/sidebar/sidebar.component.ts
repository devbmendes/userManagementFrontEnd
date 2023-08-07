import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  ngOnInit():void{}

  constructor(private route: Router){}

  logOut(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
