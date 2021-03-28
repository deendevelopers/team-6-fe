import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAdComponent } from './preview-ad.component';

describe('PreviewAdComponent', () => {
  let component: PreviewAdComponent;
  let fixture: ComponentFixture<PreviewAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
