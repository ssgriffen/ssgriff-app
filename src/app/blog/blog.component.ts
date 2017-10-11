import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any = {};
  base_url: string;
  base_img_url: string;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private router: Router, 
    private route: ActivatedRoute,
    private global_service: GlobalService
  ) {
    this.base_url = this.global_service.BASE_URL + "/static/img/blogs";
    this.base_img_url = this.global_service.BASE_IMG_URL;
   }

  ngOnInit() {

    let blog_info: any = {
      slug: this.route.snapshot.params['slug']
    }

    this.api_service.singleBlog(blog_info).subscribe(
      data => this.setBlog(data),
      err => this.snackbar.snackBarErrGen("Can't get blog atm...", "", 1500, err)
    )

  }

  setBlog(data: any){
    console.log(data);
    if(data.result) {
      this.blog = data.data;
    } else {
      this.snackbar.snackBarErrGen("Can't get blog atm...", "", 1500, data);
    }
  }
}
