import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawioComponent } from './drawio.component';

describe('DrawioComponent', () => {
  let component: DrawioComponent;
  let fixture: ComponentFixture<DrawioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
