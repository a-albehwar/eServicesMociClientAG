import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomenavigationComponent } from './homenavigation.component';

describe('HomenavigationComponent', () => {
  let component: HomenavigationComponent;
  let fixture: ComponentFixture<HomenavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomenavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
