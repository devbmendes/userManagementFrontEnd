import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user-edit',
  templateUrl: './new-user-edit.component.html',
  styleUrls: ['./new-user-edit.component.css']
})
export class NewUserEditComponent implements OnInit {

  ngOnInit():void{}

  constructor(private _dialog: MatDialog){}

  closeDialogComponent(){
    this._dialog.closeAll();
  }

}
