import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageDetailComponent } from './image-detail-component';
import { ImageListComponent } from './image-list-component';
import { ImageService } from './image.service';

import { AppRoutingModule }     from './app-routing-module/app-routing.module';


@NgModule({
	declarations: [
	  AppComponent,
	  ImageDetailComponent,
	  ImageListComponent
	],
	imports: [
	  BrowserModule,
	  FormsModule,
	  AppRoutingModule,
	  HttpModule
	],
	providers: [ImageService],
	bootstrap: [AppComponent]
})
export class AppModule { }	