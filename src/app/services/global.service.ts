import { Injectable, isDevMode } from '@angular/core';

@Injectable()
export class GlobalService {
  BASE_URL: string; //prod
  BASE_IMG_URL: string = "https://s3-us-west-1.amazonaws.com/sam-app-bucket"
  
  constructor() {
    //backends provide identical support made 2 for practice
    // this.BASE_URL = this.setUrl("flask");
    this.BASE_URL = this.setUrl("node");
   }

   setUrl(backend: string): string {

    if(isDevMode()){
      if(backend === "flask")  return "http://127.0.0.1:5000";
       
      return "http://localhost:8000";
      
    }

    if(backend === "flask") return "https://api-samgriffen.herokuapp.com";
     
    return "https://api-samgriffen-v2.herokuapp.com";
  
   }
}
