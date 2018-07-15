import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule  } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { Body1Component } from './landing-page/body1/body1.component';
import { Body2Component } from './landing-page/body2/body2.component';
import { Body3Component } from './landing-page/body3/body3.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { ContactComponent } from './contact/contact.component';
import { HeadercontactComponent } from './contact/headercontact/headercontact.component';

import { BodyfaqComponent } from './contact/bodyfaq/bodyfaq.component';
import { FootercontactComponent } from './contact/footercontact/footercontact.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    HeadercontactComponent,
    BodyfaqComponent,
    FootercontactComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
