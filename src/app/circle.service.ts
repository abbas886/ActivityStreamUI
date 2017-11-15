import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {ServiceURL} from './service_url'

@Injectable()
export class CircleService {
   constructor(private http: Http, private serviceURL: ServiceURL) {

  }
  getAllCircles() {
    return this.http.get(this.serviceURL.CIRCLE_SERVICE_BASE_URL + this.serviceURL.GET_ALL_CIRCLES)
  }



}

