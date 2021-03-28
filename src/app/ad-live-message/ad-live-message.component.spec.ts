import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLiveMessageComponent } from './ad-live-message.component';

describe('AdLiveMessageComponent', () => {
  let component: AdLiveMessageComponent;
  let fixture: ComponentFixture<AdLiveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdLiveMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdLiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
