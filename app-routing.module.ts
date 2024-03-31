import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinacadamyComponent } from './joinacadamy/joinacadamy.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeachingprogramComponent } from './teachingprogram/teachingprogram.component';
import { AboutComponent } from './about/about.component';
import { AcadamicComponent } from './acadamic/acadamic.component';
import { VedioComponent } from './vedio/vedio.component';


const routes: Routes = [   
  {path:"home", component:HomeComponent},
  {path:"joinacadamy", component:JoinacadamyComponent},  
  {path:"contact", component:ContactComponent}, 
  {path:"teachingprogram", component:TeachingprogramComponent}, 
  {path:"about", component:AboutComponent}, 
  {path:"acadamic", component:AcadamicComponent}, 
  {path:"vedio", component:VedioComponent}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} export const 
  RoutingComponent = [HomeComponent,JoinacadamyComponent, AcadamicComponent,TeachingprogramComponent, AboutComponent,ContactComponent,VedioComponent];


