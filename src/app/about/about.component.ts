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
    labels: ["JS/Typescript", "Angular", "Python/Flask", "Node.js", "Database"],
    datasets: [
      {
        backgroundColor: ["#0091EA", "#00BFA5","#D50000","#FF6D00","#C0CA33"],
        data: [50, 30, 20, 20, 10]
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
                fontColor: "white"
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

  github(){
    window.open("https://github.com/ssgriffen", '_system');
  }

  linkedin(){
    window.open("https://www.linkedin.com/in/sam-griffen-6bb41390/", '_system');
  }

}
