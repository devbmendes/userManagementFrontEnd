import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   email: string | null;

  @Output() tooglerSideBarForMe: EventEmitter<any> = new EventEmitter();


  constructor(){
    this.email = '';
  }

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }
  tooglerSideBar(){
    this.tooglerSideBarForMe.emit();
  }
  
}
