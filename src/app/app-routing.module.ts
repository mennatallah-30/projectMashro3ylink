import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{CustomlinkComponent} from './customlink/customlink.component';
import { ClientInfoSHowComponent } from './client-info-show/client-info-show.component';
import { PathTestsGuard } from './path--tests.guard';
import { HomeComponent } from './home/home.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';


const routes: Routes = [
  {path:"register" , component:RegisterComponent},
  {path:"dashboard" , component:DashboardComponent, canActivate:[PathTestsGuard]},
  {path:"customlink" , component:CustomlinkComponent},
  {path:"clientinfoshow",component:ClientInfoSHowComponent},
  {path:"homedetails/:username",component:HomedetailsComponent},

  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
