import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  
  @ViewChild('tabGroup') tabGroup: any;

  loadAPI: Promise<any>;

  front_skills: any[] = [
    {
      title: "Javascript/Typescript",
      link: true,
      tab: 1
    },
    {
      title: "HTML/CSS",
      link: true,
      tab: 1
    },
    {
      title: "JQuery",
      link: true,
      tab: 1
    },
    {
      title: "Angular (Any similar framework such as Vue)",
      link: true,
      tab: 2
    },
    {
      title: "Data Visualization (Highcharts, Charts.js, Admin interfaces)",
      link: false,
      tab: null
    }, 
    {
      title: "Material Design Concepts, Bootstrap",
      link: false,
      tab: null
    },
  ];

  back_skills: any[] = [
    {
      title: "Python",
      link: true,
      tab: 3
    },
    {
      title: "Flask",
      link: true,
      tab: 3
    },
    {
      title: "Database - PostgreSQL",
      link: true,
      tab: 3
    }
  ]

  constructor(
  ) {}

  ngOnInit() {
  }

  onSelectChange(ev: any){
    if(ev.index === 1){
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
        });
    }
  }

  public loadScript() {        
      let  node = document.createElement('script');
      node.src = "https://production-assets.codepen.io/assets/embed/ei.js";
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
}
