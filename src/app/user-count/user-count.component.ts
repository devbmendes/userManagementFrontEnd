import { Component,OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-count',
  templateUrl: './user-count.component.html',
  styleUrls: ['./user-count.component.css']
})
export class UserCountComponent implements OnInit {

  users:User[]=[];
  admin_count:number = 0;
  user_count:number = 0;
  total_user:number = 0;
  constructor(private authService:AuthService){
    
  }

  ngOnInit():void{
      this.authService.refreshNeeded$.subscribe(()=>{
        this.admin_count = 0;
        this.user_count = 0;
        this.total_user = 0;
        this.allUser();
      });
      this.allUser();
  }

  allUser(){
    this.authService.getAllUser().subscribe({
      next:(response:User[])=>{
        this.users = response;
        this.countType();
        console.log(this.users[0].role)
      }
    })
  }
  countType(){
    this.users.forEach((value)=>{
      if(value.role === "ADMIN"){
        this.admin_count = this.admin_count + 1;
      }else if(value.role === "USER"){
        this.user_count ++;
      }
    });
    this.total_user = this.user_count + this.admin_count;
  }

}
