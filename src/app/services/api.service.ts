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
    this.base_url = this.global_service.BASE_URL + "/api";
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
         withCredentials: true
    }).map((res: Response) => {
        let data = res.json();
        return data;
    });
}

public http_form_post_files(url: string, fileData: any): any {
    
    // Create headers
    let headers: any = new Headers();
    headers.append('enctype', 'multipart/form-data');
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');

    // Encode Form
    // let encoded_form: string = this.encodeObj(slugData);

    // Submit
    return this.http.post(url, fileData, {
         headers: headers,
         withCredentials: true
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
    let options: any = new RequestOptions({ headers: headers, withCredentials: true});
 
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
            withCredentials: true
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

public signout(){
    localStorage.clear();
    // used to do this until cookies in flask stopped working :/
    // this.http_get(this.base_url + "/signout", true).subscribe(
    //     data => console.log(data),
    //     err => console.log(err)
    // )

    location.reload();
}

public currentUser(){
    return this.http_get(this.base_url + "/current_user", true);
}

public allBlogs(){
    return this.http_get(this.base_url + "/all_blogs", true);
}

public createSlug(title){
    let data = {
        title: title
    };

    return this.http_form_post(this.base_url + "/create_slug", data)
}

public singleBlog(data: any){
    return this.http_form_post(this.base_url + "/single_blog", data);
}

public uploadCover(fileData: any){
    console.log("sending to " +  this.base_url + "/upload_cover");
    return this.http_form_post_files(this.base_url + "/upload_cover", fileData);
}

public createPost(data: any){
    console.log('creating at: ' + this.base_url + "/create_post");
    return this.http_form_post(this.base_url + "/create_post", data);
}

public deletePost(data: any){
    return this.http_form_post(this.base_url + "/delete_post", data);
}

public sendEmail(data: any){
    return this.http_form_post(this.base_url + "/send_mail", data);
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
