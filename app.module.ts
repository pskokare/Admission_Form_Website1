import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinacadamyComponent } from './joinacadamy/joinacadamy.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TeachingprogramComponent } from './teachingprogram/teachingprogram.component';
import { AboutComponent } from './about/about.component';
import { AcadamicComponent } from './acadamic/acadamic.component';
import { VedioComponent } from './vedio/vedio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


const routes: Routes = [   
  {path:"joinacadamy", component:JoinacadamyComponent}, 
  {path:"home", component:HomeComponent}, 
  {path:"contact", component:ContactComponent},
  {path:"teachingprogram", component:TeachingprogramComponent}, 
  {path:"about", component:AboutComponent}, 
  {path:"acadamic", component:AcadamicComponent}, 
  {path:"vedio", component:VedioComponent}, 
];

@NgModule({
  declarations: [
    AppComponent,
    JoinacadamyComponent,
    HomeComponent,
    ContactComponent,
    TeachingprogramComponent,
    AboutComponent,
    AcadamicComponent,
    VedioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
