import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthonticationService } from '../authontication.service';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent {

  @ViewChild('fileInput') fileInput:string="";


  PROFILE: any = undefined;
  statusMessage: string ;
  Username: any ;
  HomeConStyle:any={
    // 'background-color':'red'
  }

  public href: string ;
    url: string ;
  constructor(private _MyserviceService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private __AuthonticationService:AuthonticationService,
    ) { 

        this.Username = this.activatedRoute.snapshot.params['username'];

     }

    LOGOIMAGE={
      mylogo:"assets/LOGO.png"
    }

   

  ngOnInit(): void {    
    this._MyserviceService.getINFO(this.Username).subscribe({
      next: (res: any) => {
        //  console.log(res)
        if (!res?.success) {
          this.statusMessage = res.message;
        }
        else {
          this.PROFILE = res.data;
          console.log(this.PROFILE)
          this.SetHomeContainerBackground()

        }
      }
    })


    this.href = this.router.url;
    console.log(this.href);

    this._MyserviceService.getme();
  }

  SetHomeContainerBackground() {
    if (this.PROFILE.active_profile_background == 'image') {
    this.HomeConStyle["background-image"]=`url(${this.PROFILE.profile_background_image })`;
    }
    else if (this.PROFILE.active_profile_background == 'color') {
     this.HomeConStyle={"background-color":this.PROFILE.profile_background_color};
    }

  }


  shareButton() {

    if (navigator.share) {
      navigator
        .share({
          url: 'this.href',
        })
        .then(() => {
          console.log("success");
        })
        .catch((e) => {
          console.log(e, "faild");
        });
    } else {
      console.log("Not Supported");
    }
  }

  

}
