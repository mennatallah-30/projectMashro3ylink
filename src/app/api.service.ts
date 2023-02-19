import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, throwError ,map} from "rxjs";
import { AuthonticationService } from './authontication.service';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:any;
  dataaa:any;
  links_id:any;
   getmeall:any;
   username:any;


 
    

  constructor(private _HttpClient:HttpClient , private _AuthonticationService:AuthonticationService) {
     this.token= this._AuthonticationService.Token;
     let dataaa= this.token.data;
     this.getmeall = localStorage.getItem("getme")
     let clientdata: any = jwtDecode(this.token);
     console.log(clientdata);   
  }




  Api:string="https://mashro3ylink.com/api/v1/clients/front"

  getINFO(username:any){
 
   let httpheaders = new HttpHeaders({
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     'Authorization': 'Bearer'+this._AuthonticationService.Token,
     'Accept-Language': '{{lang_code}}'
   })

    console.log(this.token);
    let Api_URL=`${this.Api}/${username}`;

   return this._HttpClient.get(Api_URL,{headers : httpheaders})

 }

  getAllLinks(){
    
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+this._AuthonticationService.Token,
      'Accept-Language': '{{lang_code}}'
    })
    

    return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/links' , {headers : httpheaders});
    
  }
   

  AddLink(clientdata:any):Observable<any>{
    console.log(this.token)
    
  
  

    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer${this.token}`,
    'Accept-Language': '{{lang_code}}'
    
    
    })
  
  
    return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/links' ,clientdata, {headers : httpheaders} )
    
  
  }


 

   

    getOneLinkShow(id:number){
      let httpheaders = new HttpHeaders({
      'Accept':' application/json',
        'Content-Type': 'application/json' ,
        'Authorization': 'Bearer'+this.token,
      'Accept-Language': '{{lang_code}}'
      })
      console.log("elkey",this.token.access_token.key)
      return this._HttpClient.get("https://mashro3ylink.com/api/v1/clients/links/"+id ,{headers : httpheaders});
    }
    getme(){ 
        let httpheaders = new HttpHeaders({
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer'+this._AuthonticationService.Token,
          'Accept-Language': '{{lang_code}}'
        })
        return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/account/me' , {headers : httpheaders});
  
    }
  //   getmebyusername(username:any){ 
  //     let httpheaders = new HttpHeaders({
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer'+this._AuthonticationService.Token,
  //       'Accept-Language': '{{lang_code}}'
  //     })
  //     return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/front/'+username , {headers : httpheaders});

  // }
  
  getmebyusernamev(username:any){ 
    let httpheaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'+this._AuthonticationService.Token,
      'Accept-Language': '{{lang_code}}'
    })
    return this._HttpClient.get('https://mashro3ylink.com/api/v1/clients/front/'+username+'/vcard', {headers : httpheaders});

}



UpdateLink(links_id:number, clientdata:any):Observable<any>{
  let httpheaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer${this.token}`,
    'Accept-Language': '{{lang_code}}'
    })
    console.log("update Token", this.token.data,links_id)

  return this._HttpClient.put('https://mashro3ylink.com/api/v1/clients/links/'+links_id,clientdata,{headers : httpheaders});
  
}
DeleteLink(id:any){
  let httpheaders = new HttpHeaders({
    'Accept':' application/json',
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer'+this.token,
    'Accept-Language': '{{lang_code}}'
    })
  return this._HttpClient.delete('https://mashro3ylink.com/api/v1/clients/links/'+id, {headers : httpheaders});
}

logout(clientdata:any):Observable<any>{
  let httpheaders = new HttpHeaders({
    'Accept':' application/json',
      'Content-Type': 'application/json' ,
      'Authorization': 'Bearer',
    'Accept-Language': '{{lang_code}}'
    })
  return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/auth/logout', clientdata);
}
REMOVEDATA(){
  localStorage.removeItem("Token")
  localStorage.removeItem("Data")
}

EditProfile(clientdata:any){

  let httpheaders = new HttpHeaders({
    'Accept': 'application/json',
  'Content-Type' : 'application/json',
  'Authorization' : `Bearer${this.token}`,
  'Accept-Language': '{{lang_code}}'
  
  
  })


  return this._HttpClient.post('https://mashro3ylink.com/api/v1/clients/account/update_profile' ,clientdata, {headers : httpheaders} )
  

}

}


