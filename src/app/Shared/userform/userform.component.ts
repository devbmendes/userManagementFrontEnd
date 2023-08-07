import {AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewUserEditComponent } from 'src/app/Pages/new-user-edit/new-user-edit.component';
import { User } from 'src/app/model/user';
import { YesornotComponent } from '../yesornot/yesornot.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  users:any=[];

  
  getAllUser(){
    this._authService.getAllUser().subscribe(
      {next:(response:User[])=>{
        this.users = response;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.users)
    },error:(error)=>{
      console.log(error)
    }});
  }
  
  displayedColumns: string[] = ['id', 'firstName','lastName', 'email','type','action'];

  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _authService: AuthService){}

  ngOnInit(): void{
    this.getAllUser();
  }

  openNewEditUserComponent(){
    this._dialog.open(NewUserEditComponent, {
      height: 'auto',
      width: '45vw',
    });
  }
  yesOrNotComponent(){
    this._dialog.open(YesornotComponent);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
