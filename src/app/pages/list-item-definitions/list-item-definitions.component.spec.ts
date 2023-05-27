import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemDefinitionsComponent } from './list-item-definitions.component';

describe('ListItemDefinitionsComponent', () => {
  let component: ListItemDefinitionsComponent;
  let fixture: ComponentFixture<ListItemDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemDefinitionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
