import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNews } from './weather-news';

describe('WeatherNews', () => {
  let component: WeatherNews;
  let fixture: ComponentFixture<WeatherNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
