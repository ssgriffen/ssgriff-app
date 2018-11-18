import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalService} from './global.service';

@Injectable()
export class ApiService {
  base_url: string;

  constructor(
    private http: HttpClient,
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
    }).pipe(
        map(this.extractData),
        catchError(this.handleError));
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
    }).pipe(
        map(this.extractData),
        catchError(this.handleError));
}

public http_json_post(url: string, data: any, pdf: boolean): any {
    // Create headers
    let headers: any = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    

    let httpOptions: any = {
        headers: headers,
        withCredentials: true,
    };

    // add special header info for pdfs
    if(pdf){
        httpOptions.responseType = 'blob';
        httpOptions.observe = 'response';
    }

    return this.http.post(url, data, httpOptions).pipe(
        map(this.extractData),
        catchError(this.handleError)); 

    // Submit
}

public http_get(url: string, to_json: boolean): any {
    // Create headers
    let headers: any = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    if( !(url.includes("search") || url.includes("?")) ){
        //make unique (for ie)
        url = url + "?q=" + Math.random();
    }
    
    // Submit
    return this.http.get(url, {
        headers: headers,
        withCredentials: true
    }).pipe(
        map(this.extractData),
        catchError(this.handleError));
}

public http_get_text(url: string, to_json: boolean): any {
    // Create headers
    let headers: any = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    if( !(url.includes("search") || url.includes("?")) ){
        //make unique (for ie)
        url = url + "?q=" + Math.random();
    }
    
    // Submit
    return this.http.get(url, {
        responseType: 'text',
        headers: headers,
        withCredentials: true
    }).pipe(
        map(this.extractData),
        catchError(this.handleError));
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
    console.log(this.base_url + "/create_slug");
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
private extractData(res: any) {
    let body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

}
