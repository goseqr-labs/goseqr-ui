import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpsViewerComponent } from './xps-viewer.component';

describe('XpsViewerComponent', () => {
  let component: XpsViewerComponent;
  let fixture: ComponentFixture<XpsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpsViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
