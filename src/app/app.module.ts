import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { Body1Component } from './landing-page/body1/body1.component';
import { Body2Component } from './landing-page/body2/body2.component';
import { Body3Component } from './landing-page/body3/body3.component';
import { FooterComponent } from './landing-page/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    Body1Component,
    Body2Component,
    Body3Component,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
