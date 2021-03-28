import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOptionsComponent } from './receive-options.component';

describe('ReceiveOptionsComponent', () => {
  let component: ReceiveOptionsComponent;
  let fixture: ComponentFixture<ReceiveOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
