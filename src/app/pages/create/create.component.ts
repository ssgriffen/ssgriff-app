import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ApiService } from '../../services/api.service' 
import { GlobalService } from '../../services/global.service'
import { SnackbarService } from '../../services/snackbar.service';
import { Router, ActivatedRoute } from '@angular/router';
// for s3 uploads
require('aws-sdk/dist/aws-sdk')

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
  base_img_url: string;
  pre_data_slug: string;

  constructor(
    private fb: FormBuilder,
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router,
    private global_service: GlobalService,
    private route: ActivatedRoute
  ) {
    this.base_url = this.global_service.BASE_URL + "/static/img/blogs";
    this.base_img_url = this.global_service.BASE_IMG_URL;
   }

  ngOnInit() {

    this.pre_data_slug = this.route.snapshot.params['slug'];

    if(this.pre_data_slug !== undefined){
      this.api_service.singleBlog({slug: this.pre_data_slug}).subscribe(
        data => this.preDataLoad(data),
        err => this.snackbar.snackBarErrGen("Unable to edit post", "", 2000, err)
      )
    }

    this.createForm = this.fb.group({  
      'title': [null,Validators.required],
      'content': [null,Validators.required],
      'date': [null,Validators.required]
    });
  }

  preDataLoad(data): void {
    data = data.data;

    let post_date: string = new Date(data.date).toISOString();
    this.date = post_date.substring(0, post_date.indexOf('T'));
    this.title = data.title;
    this.content = data.content;

    let img_meta: string = '<img width="100%" src="';

    for(var i = 0; i < data.imgs.length; i++){
      this.img_urls.push( {value: img_meta + this.base_img_url + "/blog_imgs/" + data.imgs[i] + '">', view: "Img " + i} );
    }
 
  }

  upload(slug: string): void {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
  
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            let ext = inputEl.files.item(i).name.split('.').pop();
            let file_name = slug + "_"+ i + "." + ext;
            console.log('filename: ' + file_name);
            formData.append('file[]', inputEl.files.item(i), file_name);
        }
        
        this.api_service.uploadCover(formData).subscribe(
          data => this.uploadedPics(data),
          err => this.failedPics(err)
        )
    }
  }

  getLinks(): void {
    this.img_urls = [];
    
    this.api_service.createSlug(this.title).subscribe(
      data => {
        let slug = data.data;
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();

        if (fileCount > 0) { // a file was selected
          for (let i = 0; i < fileCount; i++) {
              let ext = inputEl.files.item(i).name.split('.').pop();
              let file_name = slug + "_"+ i + "." + ext;
              let img_meta = '<img width="100%" src="';
              this.img_urls.push( {value: img_meta + this.base_img_url + "/blog_imgs/" + file_name + '">', view: inputEl.files.item(i).name} );
          }
        }
      },
      err => {
        this.snackbar.snackBarErrGen("Cannot get image links", "", 2000, err);
      }
    )
  }

  dateToday(): void {
    let now: string = new Date().toISOString();
    this.date = now.substring(0, now.indexOf('T'));
  }

  onSubmit(): void {
    if(this.pre_data_slug !== undefined){
      console.log("NEED TO SUBMIT TO EDITING");
    } else {
      this.api_service.createPost(this.createForm.value).subscribe(
        data => this.goodPost(data),
        err => this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, err)
      )
    }
  }

  goodPost(data): void {
    if(data.result){
      this.upload(data.slug); 
    } else {
      this.snackbar.snackBarErrGen("Can't create post atm...", "", 2000, data)
    }
  }

  uploadedPics(data): void {
    if(data.result){
      this.snackbar.snackBarSuccGen("Success!", "", 2000);
      this.router.navigateByUrl("/blogs");
    }
  }

  failedPics(err): void {
    this.snackbar.snackBarErrGen("Failed to upload pics", "", 2000, err);
  }
}
