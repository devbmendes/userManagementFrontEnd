import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-yesornot',
  templateUrl: './yesornot.component.html',
  styleUrls: ['./yesornot.component.css']
})
export class YesornotComponent implements OnInit {

ngOnInit() :void{}

constructor(private _dialogue: MatDialog){}

closeQuestion(){
  this._dialogue.closeAll();
}

}
