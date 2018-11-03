import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsSuppliersComponent } from './fields-suppliers.component';

describe('FieldsSuppliersComponent', () => {
  let component: FieldsSuppliersComponent;
  let fixture: ComponentFixture<FieldsSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
