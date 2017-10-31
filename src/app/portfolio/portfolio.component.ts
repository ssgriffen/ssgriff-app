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
  base_img_local: string = "../../assets/img/features"
  rad_group: string = "ac";

  front_skills: any[] = [
    {
      title: "Javascript",
      link: true,
      tab: 1
    },
    {
      title: "HTML/CSS",
      link: true,
      tab: 1
    },
    {
      title: "JQuery/Bootstrap",
      link: true,
      tab: 1
    },
    {
      title: "Angular (Any similar framework such as Vue)/Typescript",
      link: true,
      tab: 2
    },
    {
      title: "Data Visualization (Highcharts, Charts.js, Admin interfaces)",
      link: true,
      tab: 2
    }, 
    {
      title: "Material Design Concepts",
      link: true,
      tab: 2
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
  ];

  ac_features: any[] = [
    {
      title: "Suite of Tools to Run Reports on Investment Portfolios",
      desc: "Clients have access to different categories and reports they can run their financial portfolios under. AnnuityCheck has a database of thousands of different companies and products competing in the annuity space for clients to easily fill in form inputs. Using our software tool agents are able to mathematically prove how an investment has performed and what a better option may be moving forward.",
      pic: "overview_snapshot.PNG"
    },
    {
      title: "Compare Reports",
      desc: "The comparison feature allows clients to analyze any investment against another and identify strengths, weaknesses, and opportunities.",
      pic: "overview_compare.PNG"
    },
    {
      title: "Visual Data",
      desc: "Not only can clients compare statistical data but they have the ability to analyze data in a graphical matter with the integration of HighCharts into AnnuityCheck.",
      pic: "overview_charts.PNG"
    },
    {
      title: '"Back Office"',
      desc: "From the main reporting system clients can save any amount of reports at once into a 'client-map' so they never lose any completed work. These client-maps are reloadable, shareable, deletable, and you can even run power point presentations on them from your back office. An agent can pick up right where they left off where their client instantly.",
      pic: "overview_backoffice.PNG"
    },
    {
      title: "Full Admin Interface",
      desc: "Admin qualified users have access to an interface that allows them to disect the usage of their clients in a vast amount of ways and timeframes. *Stats have been covered in red for confidentiality.",
      pic: "overview_admin.jpg"
    },
    {
      title: "Full Admin Interface Cont..",
      desc: "Each way to disect the data has a graphical and statistical data view to help see what their agents are doing. *stats have been covered in red for confidentiality.",
      pic: "overview_admin_1.jpg"
    },
    {
      title: "My Favorites",
      desc: "Not only can clients access different saved 'client-maps' in their back office, but they can save and load non-client-specific sets of inputs in their favorites section by clicking the floating heart in the bottom left of the page. This feature allows clients to fill out long forms with their favorite information in one click of a button, making the more confident/efficient sales people.",
      pic: "overview_heart_1.PNG"
    },
    {
      title: "My Favorites cont...",
      desc: "Each favorite has a title the user can gives the set of inputs, the date they saved it, and options to reload or delete the inputs.",
      pic: "overview_heart.PNG"
    }
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

    this.scrollUp();
  }

  public loadScript() {        
      let  node = document.createElement('script');
      node.src = "https://production-assets.codepen.io/assets/embed/ei.js";
      node.type = 'text/javascript';
      node.async = true;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    
  stack(){
    window.open("https://samgriffen.com/stack", '_system');
  }

  github(){
    window.open("https://github.com/ssgriffen/ssgriff-app", '_system');
  }
  
  scrollUp(){
    document.getElementById('top_of_page').scrollIntoView();       
  } 
}
