import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaramodalComponent } from './taramodal.component';

describe('TaramodalComponent', () => {
  let component: TaramodalComponent;
  let fixture: ComponentFixture<TaramodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaramodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaramodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
