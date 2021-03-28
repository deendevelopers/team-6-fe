import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDebriefComponent } from './receiver-debrief.component';

describe('ReceiverDebriefComponent', () => {
  let component: ReceiverDebriefComponent;
  let fixture: ComponentFixture<ReceiverDebriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiverDebriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverDebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
