import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultComponent } from './result/result.component';
import { InterestsComponent } from './interests/interests.component';
import {HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    MainPageComponent,
    ResultComponent,
    InterestsComponent,
    LoaderComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
