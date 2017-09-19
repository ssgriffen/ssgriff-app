import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  BASE_URL: string = "https://api-samgriffen.herokuapp.com/api"; //prod
  // BASE_URL: string = "http://127.0.0.1:5000/api";

  constructor() { }

}
