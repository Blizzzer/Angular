import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Image } from './image';
import { ImageService } from './image.service';


@Component({
	selector: 'image-list',
	template: `
		<span *ngFor="let image of images" class="image-thumb">
		<img src="{{image.url}}" class="thumb" (click)="onSelect(image)">
		</span>
	`,
	styles: [`  
		div.image-thumb {
			width: 100px;
			height: 100px;
		}

		img.thumb {
			width: 80px;
			height: 80px;
		}
	`]
	})
	

export class ImageListComponent  implements OnInit {
    images: Image[];

    constructor(private router: Router,
                private imageService: ImageService)  { }

    ngOnInit(): void {
	  this.getImages();
    }

    getImages(): void {
	  this.imageService.getAll().then(images => this.images = images);
    }

    onSelect(image: Image): void {
	  console.log("selected image:", JSON.stringify(image));	
	  this.router.navigate(['/view', image._id]);    
    }
}		