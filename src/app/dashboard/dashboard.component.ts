import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import jwtDecode from 'jwt-decode';
import { Token } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  EditForm = new FormGroup({
    name: new FormControl(""),
    job_title: new FormControl(""),
    bio: new FormControl("1"),
    email: new FormControl(""),
    phone: new FormControl(""),
    birthday: new FormControl(""),
    gender: new FormControl(""),
    profile_background_color: new FormControl("#ffddee"),
    active_profile_background: new FormControl(""),
    is_public: new FormControl(""),

  });


  ClientData(form: any) {


    this._ApiService.EditProfile(form.value).subscribe({
      next: (response: any) => {


        this.linkDetails = form.value;

        console.log("edit", this.linkDetails)
      }
    })
  }

  icon_image: any;

  getFile(event: any) {
    this.icon_image = event.target.files[0];
  }
  off: any;



  logout() {
    this._ApiService.REMOVEDATA();
    this._router.navigate(['/register'])

  }

  constructor(private _ApiService: ApiService,
    private __AuthonticationService: AuthonticationService,
    private _ActivatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router
  ) {


  }

  userLogin: any;
  userName: any;
  name: string;
  title: any;



  @ViewChild('fileInput') fileInput: string = "";



  imgpath: string = '/home/mashro3ylink/public_html/app/Http/Controllers/API/Client/LinkAPIController.php';


  LinksForm = new FormGroup({
    title: new FormControl(""),
    link: new FormControl(""),
    order: new FormControl("1"),
    icon: new FormControl("fa fa -facebook"),
    icon_image: new FormControl(""),
    background_color: new FormControl("#ffddee"),
    text_color: new FormControl(""),
    active_type_icon: new FormControl("icon"),
    custom_css: new FormControl(""),
    button_id: new FormControl(""),
    is_active: new FormControl("1"),
  });


  Res: any;
  userid: any;
  userdetails: any;
  value: any;
  linkDetails: any;
  Userid: any;

  clickbutton(x: any) {
    this._ApiService.getOneLinkShow(this.Userid)
    this.Userid = x;
    console.log("el-id", this.Userid);

  }



  reso: any;
  d: any;


  AddClientData(form: any) {

    this._ApiService.AddLink(form.value).subscribe({
      next: (response: any) => {
        this.linkDetails = form.value;

        console.log("addlink", this.linkDetails)
      }
    })
  }


  sendClientData(form: any) {

  }


  getdata() {

    this._ApiService.getAllLinks().subscribe({


      next: (data: any) => {

        console.log(data);



        this.userdetails = data
        this.linkDetails = data.data


        // console.log("noora" ,this.linkDetails);

      },
      error: (err) => {
        console.log(err);
      },
    });



  }



  submitData(x: any) {
    let formdata = new FormData();
    formdata.set("icon_image", this.icon_image)
    this._ApiService.AddLink(formdata).subscribe({
      next: (response) => {

      }
    })
  }

  ngOnInit(): void {
    this.__AuthonticationService.isLogin.subscribe({
      next: (newValue) => {
        console.log(newValue)
        this.userLogin = newValue;
        console.log('susbsribe run');
        this.name = this.__AuthonticationService.name;
        this.userName = this.__AuthonticationService.userName;

      },


    });
    this.getdata();

  }


  GOUSER() {
    this._router.navigate([`/homedetails/${this.userName}`])
  }


}


