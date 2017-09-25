import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  photo_bombing: boolean = false;
  skills_data: any = {
    labels: ["JS/Typescript", "Angular", "Python", "Database"],
    datasets: [
        {
            label: "Test",
            backgroundColor: ["#0091EA", "#00BFA5","#D50000","#FF6D00",],
            borderWidth: 1,
            data: [50, 30, 20, 10],
        }
    ]
  };

  show_skills: boolean = false;
  
  skills_options: any = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true
    },
    tooltips: false,
    // title: {
    //     display: true,
    //     text: titleText
    // },
    legend: {
        display: true,
        labels: {
          // This more specific font property overrides the global property
          fontColor: 'white',
          fontSize: 16
      }
    },
  };

  constructor() { }

  ngOnInit() {
  }

  github(){
    window.open("https://github.com/ssgriffen", '_system');
  }

  linkedin(){
    window.open("https://www.linkedin.com/in/sam-griffen-6bb41390/", '_system');
  }

}
