import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
  BASE_URL: string; //prod
  BASE_IMG_URL: string = "https://s3-us-west-1.amazonaws.com/sam-app-bucket"
  
  constructor() {
    this.BASE_URL = this.setUrl();
    // this.BASE_URL = "http://localhost:8000"
   }

   setUrl(): string {

    if(isDevMode()){
      return "http://127.0.0.1:5000";
      // return "http://localhost:8000";
      // return "https://api-samgriffen-v2.herokuapp.com/";
    }
    return "https://api-samgriffen.herokuapp.com";
    // return "https://api-samgriffen-v2.herokuapp.com/";
  
   }
}
