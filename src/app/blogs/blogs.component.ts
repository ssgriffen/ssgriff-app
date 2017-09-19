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

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    this.api_service.allBlogs().subscribe(
      data => data.result ? this.blogs = data.data : this.blogs = [],
      err => this.snackbar.snackBarErrGen("Can't get blogs atm...", "", 1500, err)
    )
  }

}
