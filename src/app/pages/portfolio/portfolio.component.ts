import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SnackbarService } from '../../services/snackbar.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [PortfolioService]
})

export class PortfolioComponent {
  
  @ViewChild('tabGroup') tabGroup: any;

  loadAPI: Promise<any>;
  base_img_local: string = "../../assets/img/features"
  rad_group: string = "ac";
  front_skills: any[] = [];
  back_skills: any[] = [];
  ac_features: any[] = [];
  karate_features: any[] = [];
    
  constructor(
    private snackbar: SnackbarService,
    private portfolio_service: PortfolioService
  ) {
    this.front_skills = this.portfolio_service.front_skills;
    this.back_skills = this.portfolio_service.back_skills;
    this.ac_features = this.portfolio_service.ac_features;
    this.karate_features = this.portfolio_service.karate_features;
  }

  onSelectChange(ev: any): void {
    // load script for js/jquery page
    if(ev.index === 3){
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
