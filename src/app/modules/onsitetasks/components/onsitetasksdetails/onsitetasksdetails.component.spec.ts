import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsitetasksdetailsComponent } from './onsitetasksdetails.component';

describe('OnsitetasksdetailsComponent', () => {
  let component: OnsitetasksdetailsComponent;
  let fixture: ComponentFixture<OnsitetasksdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsitetasksdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsitetasksdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
