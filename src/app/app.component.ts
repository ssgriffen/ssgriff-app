import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service' 
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = 'Sam Griffen';
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

  admin: boolean = false;

  constructor(
    private api_service: ApiService,
    private snackbar: SnackbarService
  ){}

  ngOnInit(){

    this.api_service.currentUser().map(res => res).subscribe(
      data => console.log(data),
      err => this.snackbar.snackBarErrGen("Can't identify admin or not atm...", "", 1500, err)
    );

  }
}
