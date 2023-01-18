import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTouristDestinationsComponent } from './app-tourist-destinations.component';

describe('AppTouristDestinationsComponent', () => {
  let component: AppTouristDestinationsComponent;
  let fixture: ComponentFixture<AppTouristDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTouristDestinationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTouristDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
