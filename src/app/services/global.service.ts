import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
  BASE_URL: string; //prod
  BASE_IMG_URL: string = "https://s3-us-west-1.amazonaws.com/sam-app-bucket"
  
  constructor() {
    this.BASE_URL = this.setUrl();
   }

   setUrl(): string {

    // if(isDevMode()){
    //   return this.BASE_URL = "http://127.0.0.1:5000";
    // }
    return "https://api-samgriffen.herokuapp.com";
    // return "http://127.0.0.1:5000";

   }
}
