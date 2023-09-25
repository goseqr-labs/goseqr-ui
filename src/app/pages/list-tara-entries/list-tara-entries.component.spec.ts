import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaraEntriesComponent } from './list-tara-entries.component';

describe('ListTaraEntriesComponent', () => {
  let component: ListTaraEntriesComponent;
  let fixture: ComponentFixture<ListTaraEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaraEntriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaraEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
