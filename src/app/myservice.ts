import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myservice {
  constructor(private http: HttpClient) {}

  apiKey = '9df1992de5f04d6a89cdaf6250f13978';
  url = `https://newsapi.org/v2/top-headlines?`;
  localNewsUrl = `https://newsapi.org/v2/everything?q=Raipur&apiKey=`;
  bbcnewsurl=`sources=bbc-news&apiKey=`;

  getTopHeadlines() {
    return this.http.get<any>(this.url+'q=India&apiKey='+this.apiKey);
  }

  getUSHeadlines(){
    return this.http.get<any>(this.url+'q=us&apiKey='+this.apiKey);
  }

  // getLocalNews(){
  //   return this.http.get<any>(this.localNewsUrl+this.apiKey);
  // }

   // Top Headlines
  // getTopHeadlines(): Observable<any> {
  //   const url = `${this.url}/top-headlines?country=us&apiKey=${this.apiKey}`;
  //   return this.http.get(url);
  // }

  // Local News
  getLocalNews(): Observable<any> {
    const url = `${this.url}/top-headlines?country=in&category=general&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getbbcnews(): Observable<any> {
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9df1992de5f04d6a89cdaf6250f13978`);

  }

  // getbbcnews(): Observable<any> {
  //   const url = `${this.url}/top-headlines?sources=bbc-news&apiKey=${this.apiKey}`;
  //   return this.http.get(url);
  // }

  getTopHeadlinesByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.url}q=us&category=${category}&apiKey=${this.apiKey}`);
  }

  getTechnologyNews() {
    return this.getTopHeadlinesByCategory('technology');
  }

  getBusinessNews() {
    return this.getTopHeadlinesByCategory('business');
  }

  getSportsNews() {
    return this.getTopHeadlinesByCategory('sports');
  }

  getHealthNews() {
    return this.getTopHeadlinesByCategory('health');
  }

  getEntertainmentNews() {
    return this.getTopHeadlinesByCategory('entertainment');
  }
  
  getPolitics() {
    return this.getTopHeadlinesByCategory('politics');
  }


  getWeatherNews() {
  const url = `https://newsapi.org/v2/everything?q=weather&sortBy=publishedAt&apiKey=${this.apiKey}`;
  return this.http.get(url);
}
  

  getWeather(city: string) {
  const apiKey = '49477b7b4782237efac72b7a7b056676';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Raipur&appid=${apiKey}&units=metric`;
  return this.http.get(url);
}
}


