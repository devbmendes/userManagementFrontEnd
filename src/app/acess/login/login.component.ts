import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserAuthRequest } from 'src/app/model/Login';
import { MatSnackBar,MatSnackBarHorizontalPosition,
  MatSnackBarModule,
  MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  loginRequest:UserAuthRequest = {
    email:'',password:''
  } ;

  LoginResponse:any;

  initLogin(){

  }

  ngOnInit():void{

    
  }
  constructor(private auth: AuthService,private _snackBar: MatSnackBar, private router: Router){
  }

  openSnackBar(error:any) {
    this._snackBar.open('Credentials invalid, try again', 'Close', {
    });
  }

 login(){
  this.auth.login(this.loginRequest).subscribe(
    {next: (response)=>{
      localStorage.setItem('email',response.email as string);
      localStorage.setItem('token',response.token as string);
      localStorage.setItem('role',response.role as string);

      this.router.navigate(['/home/user']);
    },error:(error)=>{
      console.log(error);
      this.openSnackBar(error);
    }}
  )
 }

}
