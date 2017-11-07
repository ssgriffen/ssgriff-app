import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ApiService } from '../services/api.service'
import { SnackbarService } from '../services/snackbar.service';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})

export class BlogsComponent implements OnInit {
  blogs: any[] = [];
  admin: boolean = false;
  base_url: string;
  base_img_url: string;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService,
    private global_service: GlobalService
  ) {
    this.base_url = this.global_service.BASE_URL + "/static/img/blogs";
    this.base_img_url = this.global_service.BASE_IMG_URL;
   }

  ngOnInit() {
    
    this.getAllBlogs();

    if(localStorage.getItem('admin')){
      this.admin = true;
    }

  }

  getAllBlogs(){
    this.blogs = [];

    this.api_service.allBlogs().subscribe(
      data => this.blogData(data),
      err => this.snackbar.snackBarErrGen("Can't get blogs atm...", "", 1500, err)
    );

  }

  blogData(data) {
    console.log(data);
    data.result ? this.blogs = data.data : this.blogs = [];
    console.log(this.blogs.length);
  }

  deleteBlog(ev: any){
    let slug: string = ev.currentTarget.id;
    let to_del: any = {
      slug: slug
    }

    this.api_service.deletePost(to_del).subscribe(
      data => this.goodDel(data),
      err => this.snackbar.snackBarErrGen("Can't delete atm...", "", 2000, err)
    );

  }

  goodDel(data){
    this.getAllBlogs();
  }

}
