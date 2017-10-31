import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  front_end: any[] = [
    {
      name: "Typescript (~2.3)",
      info: "https://www.typescriptlang.org/",
      description: "Superset of Javascript for stricter typing.",
      src: "../../../assets/img/ts_icon.png"
    },
    {
      name: "Angular (^4.2)",
      info: "https://angular.io/",
      description: "A heavy duty Front End Framework.",
      src: "../../../assets/img/ang_icon.png"
    },
    {
      name: "Angular Material 2 (beta.12)",
      info: "https://material.angular.io/",
      description: "Material Design Framework by Angular.",
      src: "../../../assets/img/mats_icon.png"
    }
  ];

  back_end: any[] = [
    {
      name: "Python (3.6)",
      info: "https://www.python.org/download/releases/3.0/",
      description: "Wrote API for this app, needed for blog and admin so far.",
      src: "../../../assets/img/python_icon.png"
    },
    {
      name: "Flask (0.12.2)",
      info: "http://flask.pocoo.org/",
      description: "Python framework I use to make life easier.",
      src: "../../../assets/img/flask_icon.png"
    },
    {
      name: "PostgreSQL",
      info: "https://www.postgresql.org/",
      description: "Database for this app, mainly storing blog info.",
      src: "../../../assets/img/postgre_icon.png"
    },
    {
      name: "Heroku",
      info: "https://www.heroku.com/",
      description: "Hosting both front end and back end on Heroku.",
      src: "../../../assets/img/heroku_icon.png"
    },
    {
      name: "Amazon S3",
      info: "https://aws.amazon.com/s3/",
      description: "Storage layer for storing blog images",
      src: "../../../assets/img/s3_icon.png"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  openLink(ev: any){
    let link: string = ev.currentTarget.id;
    window.open(link, '_system');
  }

}
