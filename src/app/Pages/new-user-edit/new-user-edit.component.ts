import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserRegisterRequest } from 'src/app/model/UserRegisterRequest';
import { User } from 'src/app/model/user'; 
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-new-user-edit',
  templateUrl: './new-user-edit.component.html',
  styleUrls: ['./new-user-edit.component.css']
})
export class NewUserEditComponent implements OnInit {

  userResponse:any;
  errors:any = [];

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

  constructor(private _dialogRef: MatDialogRef<NewUserEditComponent>,private _fb:FormBuilder, private _auth: AuthService){
    this.userForm = this._fb.group(this.userRequest);
  }

  selectType(type:string){
    console.log(type);
  }

  saveUser(){
    this._auth.saveUser(this.userForm.value).subscribe({
      next:(data:any)=>{
        this.userResponse = data
        console.log(data)
        this._dialogRef.close();

      },
      error:(error)=>{
        this.errors = error;
        console.log(this.errors.error.errors)
      }
    })
  
  }

}
