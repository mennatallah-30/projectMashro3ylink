import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { from } from 'rxjs';
@Component({
  selector: 'app-client-info-show',
  templateUrl: './client-info-show.component.html',
  styleUrls: ['./client-info-show.component.css']
})
export class ClientInfoSHowComponent  implements OnInit  {

  constructor(private _autho:AuthonticationService ,
    private _ApiService:ApiService){
     
     
     
 
  }

  @ViewChild('fileInput') fileInput:string="";
  userdetails:any;
  linkDetails:any;
  Userid:any;
  
icon_image:any;



getFile(event:any){
  this.icon_image = event.target.files[0];
}

     submitData(x:any){
    let formdata= new FormData();
    formdata.set("icon_image", this.icon_image  )
    this._ApiService.AddLink(formdata).subscribe({
      next:(response)=>{
        
      }
    });
    }
  

 
  


   EditForm = new FormGroup({
    title:new FormControl("" ,[Validators.required , Validators.minLength(3), Validators.maxLength(10)]),
    link: new FormControl(""),
    order:new FormControl("1"),
    
    background_color:new FormControl(""),
    text_color:new FormControl(""),
    active_type_icon:new FormControl("0"),
    custom_css:new FormControl(""),
    button_id:new FormControl(""),
    is_active:new FormControl("0"),
    // _method:new FormControl("PUT")
  });
  emp:any;
  responseUpdate:any;
  det:any;
reso:any;

containerubdate:any;
x:any;

allData(links_id:any,clientdata:any){

  console.log(links_id,clientdata)
    this._ApiService.UpdateLink(links_id,clientdata.value).subscribe({
      
       next:(response:any)=>{
        
       

        this.linkDetails=response.data
        
       
        

        console.log("update eshtghlt",response.data.links_id)
       }

      })
    }


  
    
        
      


// edit(x:any){
  
//   this.clientToUpdate = this.linkDetails;
//   this.linkDetails=x.id;
//   console.log("here edit", this.clientToUpdate)

// }






  
  
 


 
 container:any;
 idresp:any;
 num:any;
 deletebutton(x:any){
  console.log(x);
 
  this._ApiService.DeleteLink(x).subscribe({

    

    next: (response)=>{
     
    
      this.getdata()

    },
    error: (err) => {
      console.log(err)
    }

  })

   
  
  

}




  
  AddClientData(form:any){
   
    
    this._ApiService.AddLink(form.value).subscribe({
      next:(response:any)=>{
      
        this.getdata()
        this.linkDetails=form.value;
        
        console.log("addlink", this.linkDetails)
      }
    }) 
  }

  getdata(){
    this._ApiService.getAllLinks().subscribe({
    
      
      next: (data:any) => {
        
        console.log(data);
       
        
    
        this.userdetails = data
        this.linkDetails=data.data
        
        
        
        // console.log("noora" ,this.linkDetails);
        
      },
      error: (err) => {
        console.log(err);
      },
    });

  }
  



   
 

 
 






     



 ngOnInit(): void {
  this.getdata()
  
 
 
 
   
 }


 

 }
