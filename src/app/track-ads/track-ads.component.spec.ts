import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAdsComponent } from './track-ads.component';

describe('TrackAdsComponent', () => {
  let component: TrackAdsComponent;
  let fixture: ComponentFixture<TrackAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
