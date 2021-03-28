import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiverDebriefComponent } from './giver-debrief.component';

describe('GiverDebriefComponent', () => {
  let component: GiverDebriefComponent;
  let fixture: ComponentFixture<GiverDebriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiverDebriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiverDebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
