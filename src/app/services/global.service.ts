import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
  BASE_URL: string = "https://api-samgriffen.herokuapp.com"; //prod
  
  constructor() {
    if(isDevMode()){
      this.BASE_URL = "http://127.0.0.1:5000";
    }
   }

}
