import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-new-user-edit',
  templateUrl: './new-user-edit.component.html',
  styleUrls: ['./new-user-edit.component.css']
})
export class NewUserEditComponent implements OnInit {

  hide = true;

  myControl = new FormControl('');
  options: string[] = ['ADMIN USER', 'NORMAL USER'];

  ngOnInit():void{}

  constructor(private _dialog: MatDialog){}

  selectType(type:string){
    console.log(type);
  }
  closeDialogComponent(){
    this._dialog.closeAll();
  }

  saveUser(data:User){
    console.log(data);

  }

}
