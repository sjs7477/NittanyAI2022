import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { LoaderComponent } from './loader/loader.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResultComponent } from './result/result.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'signup', component: SignupComponent},
  {path:'', component: HomeComponent},
  {path:'signin', component: SigninComponent},
  {path:'main',component:MainPageComponent},
  {path:'result',component:ResultComponent},
  {path:'explore',component:InterestsComponent},
  {path:'loader' , component:LoaderComponent},
  {path:'graph', component:GraphComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
