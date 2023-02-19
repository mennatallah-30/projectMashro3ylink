import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import{HttpHeaders} from '@angular/common/http';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  isLogin = new BehaviorSubject(null);
   
   
  userName:string="";
  name:string=""
  Token:any;
  data2:any;
  Data:any;

  constructor (private _HttpClien: HttpClient){
     this.Token = localStorage.getItem('Token');
    this.Data= localStorage.getItem('Data'); 
    
  
    if (this.Token !== null) { 
    let userData: any = jwtDecode(this.Token);
    
    console.log(userData)
   
     
      this.userName = this.Data;
    
    }
    this.isLogin.next(this.Token);
  }
  

  logIn(userData:any):Observable<any>{
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
     'Content-Type': 'application/json'
    })
   
     return  this._HttpClien.post('https://mashro3ylink.com/api/v1/clients/auth/login', userData);
  }

  


}


