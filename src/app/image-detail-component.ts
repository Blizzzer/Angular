import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Image } from './image';
import { ImageService } from './image.service';

@Component({
    selector: 'image-list',
    template: `
      <div>
      
        <img src="{{image.url}}"/><br/>
        <form name = "ImageForm">
			Data powstania: <input type="date" name="Data powstania" [(ngModel)] = "image.date" /><br>
			Autor: <input type="author" name="Autor" [(ngModel)] = "image.author" /><br>
            Tytuł: <input type="title" name="Tytuł" [(ngModel)] = "image.title" /><br>
			Opis: <input type="description" name="opis" [(ngModel)] = "image.description" /><br>
            <button (click)="goAdd()">Aktualizuj dane</button>
        </form>
        id: {{image._id}}<br>
		Data powstania: {{image.date}}<br>
		Autor: {{image.author}}<br>
        Tytuł: {{image.title}}<br>
        Opis: {{image.description}}<br>
      </div>
      <hr>
      <button (click)="goBack()">Back</button>
      

    `
  })


export class ImageDetailComponent  implements OnInit {    
    private sub: any;
    private image: Image;
  
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private imageService: ImageService
      ) {}
  
      ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
          this.imageService.get(params['_id']).then(image => this.image = image);
         });
      }

      ngOnDestroy() {
          this.sub.unsubscribe();
      }

      goBack(): void {
        this.location.back();
      }

      goAdd(): void {
          console.log("goAdd(): url", this.image);
          this.imageService.post(this.image).then(() => location);
        
        
        
      }
      
}
