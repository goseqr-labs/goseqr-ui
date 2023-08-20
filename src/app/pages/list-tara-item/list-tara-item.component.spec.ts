import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaraItemComponent } from './list-tara-item.component';

describe('ListTaraItemComponent', () => {
  let component: ListTaraItemComponent;
  let fixture: ComponentFixture<ListTaraItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaraItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
