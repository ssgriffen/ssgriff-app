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
    this.api_service.allBlogs().subscribe(
      data => data.result ? this.blogs = data.data : this.blogs = [],
      err => this.snackbar.snackBarErrGen("Can't get blogs atm...", "", 1500, err)
    );

    this.api_service.currentUser().map(res => res).subscribe(
      data => data.result ? this.admin = true : this.admin = false,
      err => this.snackbar.snackBarErrGen("Can't identify admin or not atm...", "", 1500, err)
    );

  }

}
