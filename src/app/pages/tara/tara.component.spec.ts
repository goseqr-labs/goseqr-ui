import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaraComponent } from './tara.component';

describe('TaraComponent', () => {
  let component: TaraComponent;
  let fixture: ComponentFixture<TaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
