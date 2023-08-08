import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterRequest } from 'src/app/model/UserRegisterRequest';
import { User } from 'src/app/model/user';



@Component({
  selector: 'app-new-user-edit',
  templateUrl: './new-user-edit.component.html',
  styleUrls: ['./new-user-edit.component.css']
})
export class NewUserEditComponent implements OnInit {

  userForm : FormGroup;
  userRequest: UserRegisterRequest ={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    role:''
};

  hide = true;

  myControl = new FormControl('');
  options: string[] = ['ADMIN', 'USER'];

  ngOnInit():void{}

  constructor(private _dialog: MatDialog,private _fb:FormBuilder){
    this.userForm = this._fb.group(this.userRequest
    )
  }

  selectType(type:string){
    console.log(type);
  }

  saveUser(){
    console.log(this.userForm.value)
  }

  closeDialogComponent(){
    this._dialog.closeAll();
  }

}
