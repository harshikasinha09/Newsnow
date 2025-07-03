import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-news',
  imports: [CommonModule,FormsModule,RouterLink,WeatherNews],
  templateUrl: './weather-news.html',
  styleUrl: './weather-news.css'
})
export class WeatherNews {
  weatherNews: any[] = [];

  currentYear: number = new Date().getFullYear();
  constructor(private myservice: Myservice, private router: Router) {}

  weather: any = null;

  ngOnInit():void{

    this.myservice.getWeather('Mumbai').subscribe({
    next: (data) => this.weather = data,
    error: (err) => console.error('Weather error:', err)
    });
    
    this.myservice.getWeatherNews().subscribe({
    next: (data: any) => {
      console.log("Weather News:", data);
      this.weatherNews = data.articles?.slice(0, 6) || [];
    },
    error: (err) => console.error("Weather News Error:", err)
  });
  }

}
