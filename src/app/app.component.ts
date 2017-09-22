import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from './services/api.service' 
import { SnackbarService } from './services/snackbar.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'S.S. Griffen';
  
  nav_items: any[] = [
    {
      view: "About",
      icon: "info",
      link: "/about"
    },
    {
      view: "Portfolio",
      icon: "work",
      link: "/portfolio"
    },
    {
      view: "Blog",
      icon: "speaker_notes",
      link: "/blogs"
    },
    {
      view: "Site Stack",
      icon: "build",
      link: "/stack"
    },
    {
      view: "Contact",
      icon: "contact_mail",
      link: "/contact"
    }
  ];

  admin_nav: any[] = [
    {
      view: "New Blog Post",
      icon: "create",
      link: "/create"
    },
  ];

  admin: boolean = false;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService,
    @Inject(DOCUMENT) private document,
  ){}

  ngOnInit(){

    if(localStorage.getItem('admin')){
      this.admin = true;
    }
    // used to do the cool way below until cookies didnt work in safari >_>
    // this.api_service.currentUser().map(res => res).subscribe(
    //   data => data.result ? this.admin = true : this.admin = false,
    //   err => this.snackbar.snackBarErrGen("Can't identify admin or not atm...", "", 1500, err)
    // );
    
  }

  logout(){
    this.api_service.signout();
  }
}
