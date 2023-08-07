import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';
import {UserAuthRequest } from '../model/Login';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  url = "http://localhost:8080/v1/auth";

  ngOnInit():void{}
  constructor(private _http: HttpClient) { }

  login(data:UserAuthRequest):Observable<any>{
    return this._http.post<any>(this.url +'/login',data);
  }
  getAllUser():Observable<User[]>{
    return this._http.get<User[]>(this.url+'/all');
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }
  
}
