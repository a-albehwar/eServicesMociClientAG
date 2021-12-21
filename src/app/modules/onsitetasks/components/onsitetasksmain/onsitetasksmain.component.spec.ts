import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsitetasksmainComponent } from './onsitetasksmain.component';

describe('OnsitetasksmainComponent', () => {
  let component: OnsitetasksmainComponent;
  let fixture: ComponentFixture<OnsitetasksmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsitetasksmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsitetasksmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
