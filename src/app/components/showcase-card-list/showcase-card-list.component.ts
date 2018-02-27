import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase-card-list',
  templateUrl: './showcase-card-list.component.html',
  styleUrls: ['./showcase-card-list.component.css']
})
export class ShowcaseCardListComponent {

  @Input() data: any[] = [];
  @Input() width: any = "300px";
  @Input() cols: string = "mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone";

  constructor() { }
  tracker(index: number, item: any): number {
    return index;
  }

}
