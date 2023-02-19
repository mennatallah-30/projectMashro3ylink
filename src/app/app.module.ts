import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomlinkComponent } from './customlink/customlink.component';
import { LogoutComponent } from './logout/logout.component';
import { ClientInfoSHowComponent } from './client-info-show/client-info-show.component';
import { HomeComponent } from './home/home.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashboardComponent,
    CustomlinkComponent,
    LogoutComponent,
    ClientInfoSHowComponent,
    HomeComponent,
    HomedetailsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
