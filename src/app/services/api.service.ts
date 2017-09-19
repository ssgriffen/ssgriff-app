import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestMethod, ResponseContentType, URLSearchParams, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { GlobalService} from './global.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {
  base_url: string;

  constructor(
    private http: Http,
    private router: Router,
    private global_service: GlobalService
  ) { 
    this.base_url = this.global_service.BASE_URL;
  }

   //*****COMMON SERVER REQUESTS*****
   public http_form_post(url: string, form: any): any {
    
    // Create headers
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // Encode Form
    let encoded_form: string = this.encodeObj(form);

    // Submit
    return this.http.post(url, encoded_form, {
         headers: headers,
    }).map((res: Response) => {
        let data = res.json();
        return data;
    });
}

public http_json_post(url: string, data: any, pdf: boolean): any {
    // Check if offline for mobile app
  
    // Create headers
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    let options: any = new RequestOptions({ headers: headers});
 
    // Submit
    return this.http.post(url, data, options).map((res: Response) => {
        if(pdf) {
            return res;
        } else {
            let data = res.json();
            return data;     
        }  
    });
}

public http_get(url: string, to_json: boolean): any {
    // Create headers
    let headers: any = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    //make unique (for ie)
    url = url + "?q=" + Math.random();

    // Submit
    if(to_json){
        return this.http.get(url, {
            headers: headers,
        }).map((res: Response) => {
            let data = res.json();
            return data;
        });
    } 

    return this.http.get(url, {
        headers: headers,
        withCredentials: true
    }).map((res: Response) => {
        return res;
    });;
    
}

public signin(form_obj){
    return this.http_form_post(this.base_url + "/signin", form_obj);
}

public currentUser(){
    return this.http_get(this.base_url + "/current_user", true);
}

//encodes objects into strings readable by the backend.
public encodeObj(obj: any): string {
  let urlSearchParams = new URLSearchParams();
 
  for(var i = 0; i<Object.keys(obj).length;i++){
       urlSearchParams.append(Object.keys(obj)[i], obj[Object.keys(obj)[i]]);
  }

  let body: string = urlSearchParams.toString();
  return body;
}

}
