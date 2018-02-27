import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseCardListComponent } from './showcase-card-list.component';

describe('ShowcaseCardListComponent', () => {
  let component: ShowcaseCardListComponent;
  let fixture: ComponentFixture<ShowcaseCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
