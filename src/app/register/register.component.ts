import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';

  
  @Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
  export class RegisterComponent implements OnInit {
    
  
    registrationForm = new FormGroup({
      username: new FormControl("" , [Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
  
  
     
      password: new FormControl("", [Validators.required , Validators.minLength(3)]),
  
  
     
   
      
    });

    apiresponse:any;
  
    
    constructor(private _AuthonticationService:AuthonticationService , private _router:Router) {}
  
  
     sendData(form:any){
     
      console.log(form.value);
      if (form.valid){
  
        this._AuthonticationService.logIn(form.value).subscribe({
          next:(response)=> {
          // console.log(response);
          
          this.apiresponse = response.message;
          if(response.message == 'Token Created.'){

           localStorage.setItem('Token' , response.data.access_token);
           localStorage.setItem('Data', response.data.user.username);
           

           
           
         
           
           
           

          //  let userData: any = jwtDecode(response.data.user);
          //  console.log(userData.name);
           this._AuthonticationService.userName = response.data.user.username;
          this._AuthonticationService.name= response.data.user.name;

          this._AuthonticationService.isLogin.next(response.data.access_token);
          
           
            this._router.navigate(['/dashboard'])
          }
          },
          error:(err)=>{
            console.log(err);
          },
        });
        
      
  
      }else {
  
      }
      
        
      
      
    }
  
    
  
  
    ngOnInit(): void {
    
    }
  
  }
  

