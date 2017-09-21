import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ApiService } from '../services/api.service'
import { SnackbarService } from '../services/snackbar.service';

// interface blog {
//   title: string,
//   id: any,
//   content: string,
//   excerpt: string,
//   date: any
// }

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any[] = []
  admin: boolean = false;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    
    this.getAllBlogs();

    this.api_service.currentUser().map(res => res).subscribe(
      data => data.result ? this.admin = true : this.admin = false,
      err => this.snackbar.snackBarErrGen("Can't identify admin or not atm...", "", 1500, err)
    );

  }

  getAllBlogs(){
    this.blogs = [];

    this.api_service.allBlogs().subscribe(
      data => data.result ? this.blogs = data.data : this.blogs = [],
      err => this.snackbar.snackBarErrGen("Can't get blogs atm...", "", 1500, err)
    );

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
