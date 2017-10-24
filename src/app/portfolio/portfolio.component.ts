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
 
  embeds: any[] = [
    {
      theme_id: "dark",
      slug: "mWzLqz",
      version: "2",
      title: "Tic Tac Toe",
      preview: "true",
      href: "http://codepen.io/ssgriffen/pen/mWzLqz/"
    },
    {
      theme_id: "dark",
      slug: "wJjVWW",
      version: "2",
      title: "Pomodoro Clock",
      preview: "true",
      href: "http://codepen.io/ssgriffen/pen/wJjVWW/"
    },
    {
      theme_id: "dark",
      slug: "QdPLPx",
      version: "2",
      title: "Simple JS Calc",
      preview: "true",
      href: "http://codepen.io/ssgriffen/pen/QdPLPx/"
    },
    {
      theme_id: "dark",
      slug: "PbgNbL",
      version: "2",
      title: "Wiki Search",
      preview: "true",
      href: "http://codepen.io/ssgriffen/pen/PbgNbL/"
    },
  ];


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
