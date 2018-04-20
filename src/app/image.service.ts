import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Image } from './image';


@Injectable()
export class ImageService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private imageUrl = "/webresources/images";

  constructor(private http: Http) { }

  getAll(): Promise<Image[]> {
    return this.http.get(this.imageUrl)
               .toPromise()
               .then(response => response.json() as Image[])
               .catch(this.handleError);
  }

  post(image: Image): Promise<Image> {
    const url = this.imageUrl + "/" + image._id;
    console.log("ImageService.postImage(): url", url);
    return this.http.post(url, JSON.stringify(image), {headers: this.headers})
      .toPromise()
      .then(() => image)
      .catch(this.handleError);
  }

  get(_id: string): Promise<Image> {
    const url = this.imageUrl + "/" + _id;
    console.log("ImageService.getImage(): url", url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Image)
      .catch(this.handleError);
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }


}
