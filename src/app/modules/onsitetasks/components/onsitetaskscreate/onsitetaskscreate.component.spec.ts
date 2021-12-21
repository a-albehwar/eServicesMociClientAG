import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnsitetaskscreateComponent } from './onsitetaskscreate.component';

describe('OnsitetaskscreateComponent', () => {
  let component: OnsitetaskscreateComponent;
  let fixture: ComponentFixture<OnsitetaskscreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnsitetaskscreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsitetaskscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
