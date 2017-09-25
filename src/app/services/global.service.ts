import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
  BASE_URL: string; //prod
  
  constructor() {
    this.BASE_URL = this.setUrl();
   }

   setUrl(): string {

    // if(isDevMode()){
    //   return this.BASE_URL = "http://127.0.0.1:5000";
    // }
    return "https://api-samgriffen.herokuapp.com";

   }
}
