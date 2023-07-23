import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserEditComponent } from 'src/app/Pages/new-user-edit/new-user-edit.component';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  constructor(private _dialog: MatDialog){}

  ngOnInit(): void{}

  OpenNewEditUserComponent(){
    this._dialog.open(NewUserEditComponent);
  }

}
