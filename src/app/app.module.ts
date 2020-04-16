import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule, FormGroup}from "@angular/forms"

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  
    
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
