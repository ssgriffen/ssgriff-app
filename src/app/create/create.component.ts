import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ApiService } from '../services/api.service' 
import { GlobalService } from '../services/global.service'
import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() multiple: boolean = true;
  @ViewChild('fileInput') inputEl: ElementRef;
  
  createForm: FormGroup;
  title: string;
  content: string;
  date: string;
  img_urls: any[] = [];
  base_url: string;

  constructor(
    private fb: FormBuilder,
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router,
    private global_service: GlobalService
  ) {
    this.base_url = this.global_service.BASE_URL + "/static/img/blogs";
   }

  ngOnInit() {
    this.createForm = this.fb.group({  
      'title': [null,Validators.required],
      'content': [null,Validators.required],
      'date': [null,Validators.required]
    });
  }

  upload(slug: string) {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
  
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            let ext = inputEl.files.item(i).name.split('.').pop();
            let file_name = slug + "_"+ i + "." + ext;
            formData.append('file[]', inputEl.files.item(i), file_name);
        }

        console.log('uploading pics');
        
        this.api_service.uploadCover(formData).subscribe(
          data => this.uploadedPics(data),
          err => this.failedPics(err)
        )
    }
  }

  getLinks(){
    this.img_urls = [];
    
    this.api_service.createSlug(this.title).subscribe(
      data => {
        let slug = data.slug;
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();

        if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              let ext = inputEl.files.item(i).name.split('.').pop();
              let file_name = slug + "_"+ i + "." + ext;
              let img_meta = '<img width="100%" src="';
              this.img_urls.push( {value: img_meta + this.base_url + "/" + file_name + '">', view: inputEl.files.item(i).name} );
          }
        }
      },
      err => {
        this.snackbar.snackBarErrGen("Cannot get image links", "", 2000, err);
      }
    )
  }

  dateToday(){
    let now = new Date().toISOString();
    this.date = now.substring(0, now.indexOf('T'));
  }

  onSubmit(){
    console.log("Saving blog");
    console.log(this.createForm.value);
    this.api_service.createPost(this.createForm.value).subscribe(
      data => this.goodPost(data),
      err => this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, err)
    )
  }

  goodPost(data){
    if(data.result){
      this.upload(data.slug); 
    } else {
      this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, data)
    }
  }

  uploadedPics(data) {
    if(data.result){
      this.snackbar.snackBarSuccGen("Success!", "", 2000);
      this.router.navigateByUrl("/blogs");
    }
  }

  failedPics(err){
    this.snackbar.snackBarErrGen("Failed to upload pics", "", 2000, err);
  }
}
