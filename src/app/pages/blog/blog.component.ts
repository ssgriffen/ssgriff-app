import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { SnackbarService } from '../../services/snackbar.service';
import { GlobalService } from '../../services/global.service';

declare var DISQUS: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  admin: boolean = false;
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

    // DON'T EDIT BELOW THIS LINE
    var d: any = document, s = d.createElement('script');
    s.src = 'https://ssgriffen.disqus.com/embed.js';
    s.setAttribute('data-timestamp', + new Date());
    (d.head || d.body).appendChild(s);

    if(localStorage.getItem('admin')){
      this.admin = true;
    }

    let blog_info: any = {
      slug: this.route.snapshot.params['slug']
    }

    this.api_service.singleBlog(blog_info).subscribe(
      data => this.setBlog(data),
      err => this.snackbar.snackBarErrGen("Can't get blog atm...", "", 1500, err)
    )

  }

  setBlog(data: any): void {
    if(data.result) {
      this.blog = data.data;
    } else {
      this.snackbar.snackBarErrGen("Can't get blog atm...", "", 1500, data);
    }
  }

  deleteBlog(ev: any): void {
    let slug: string = ev.currentTarget.id;
    let to_del: any = {
      slug: slug
    }

    this.api_service.deletePost(to_del).subscribe(
      data => this.goodDel(data),
      err => this.snackbar.snackBarErrGen("Can't delete atm...", "", 2000, err)
    );

  }

  goodDel(data): void {
    this.router.navigateByUrl("/blogs");
  }
}
