import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ImageDetailComponent } from '../image-detail-component';
import { ImageListComponent } from '../image-list-component';


const routes: Routes = [
	{ path: 'list', component: ImageListComponent },
	{ path: 'view/:_id', component: ImageDetailComponent},
	{ path: '', redirectTo: '/list', pathMatch: 'full'}
];


@NgModule({
	imports: [
	  CommonModule,
	  RouterModule.forRoot(routes)
	],
	exports: [ 
	  RouterModule 
	],
	declarations: []
})
export class AppRoutingModule { }	