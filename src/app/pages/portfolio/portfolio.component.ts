import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  
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
      title: "Ionic 3 (Built on Angular) - Hybrid Mobile Apps",
      link: true,
      tab: 3
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
      title: "PostgreSQL",
      link: true,
      tab: 3
    },
    {
      title: "Node.js",
      link: true,
      tab: 3
    },
    {
      title: "MongoDB",
      link: true,
      tab: 3
    },
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

  karate_features: any[] = [
    {
      title: "Home Page",
      desc: "Initial page users see. Includes a featured highlight video, next event information, featured fighter, news story and a viral media item.",
      pic: "karate_home.png"
    },
    {
      title: "Videos Page",
      desc: "Split up between highlight and full fight videos. Highlights can include knockout reels, interviews, and viral media. Full fights are 1 on 1 Karate Combat fights between world class atheletes.",
      pic: "karate_fullfights.png"
    },
    {
      title: "Fighters Page",
      desc: "A list of fighter cards depicting their picture, country's flag and weight class. I actually used a virtual scroll for this to allow for a large list.",
      pic: "karate_fighters.png"
    },
    {
      title: 'Fighter Detail Page',
      desc: "Here's a brief view at the detail page for an individual fighter",
      pic: "fighter_bio_3.png"
    },
    {
      title: 'Gear Page',
      desc: "Fully Functional shop for Karate merch and gear.",
      pic: "karate_gear.png"
    },
    {
      title: 'More Page',
      desc: "About and Contact info.",
      pic: "karate_more.png"
    },
  ]

  constructor(
    private snackbar: SnackbarService
  ) {}

  onSelectChange(ev: any): void {
    if(ev.index === 1){
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
        });
    }
  }

  public loadScript(): void {        
    let  node = document.createElement('script');
    node.src = "https://production-assets.codepen.io/assets/embed/ei.js";
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  openLink(link: string): void {
    window.open(link, '_system');
  }
  
  scrollUp(): void {
    document.getElementById('top_of_page').scrollIntoView(true);       
  } 

  comingSoon(): void {
    this.snackbar.snackBarSuccGen("Coming Soon", "", 2000);
  }

  tracker(index: number, item: any): number {
    return index;
  }
}