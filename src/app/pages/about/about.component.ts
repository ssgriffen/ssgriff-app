import { Component, OnInit } from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  photo_bombing: boolean = false;
  
  skills_data: any = {
    labels: ["JS/Typescript", "Angular", "Ionic/Hybrid Mobile Apps", "Python/Flask", "Node.js", "Database"],
    datasets: [
      {
        backgroundColor: ["#0091EA", "#00BFA5", "#4b875c", "#D50000","#FF6D00","#C0CA33"],
        data: [50, 38, 30, 20, 20, 10]
      }
    ]
  }

  skills_options: any = {
    legend: {
      display: false,
      labels: {
        fontColor: 'white'
      }
    },
    maintainAspectRatio: false,
    responsive: true,
    title: {
      display: false,
    },
    tooltips: {
      enabled: false
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true,
                fontColor: "white",
                fontSize: 16
            }
        }],
        xAxes: [{
          ticks: {
              display: false,
              beginAtZero:true
          }
      }]
    }
}

  constructor() { }

  ngOnInit() {
    Chart.defaults.global.scaleBegainAtZero = true;
  }

  openLink(link: string): void {
    window.open(link, '_system');
  }
}
