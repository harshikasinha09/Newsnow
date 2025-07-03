import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Headlines } from './headlines/headlines';
import { Myservice } from './myservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CategoryNews } from './category-news/category-news';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,RouterLink,Headlines,FormsModule,CommonModule,CategoryNews,Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
   protected title = 'headlines';
    constructor(private router: Router) {}

  onCategoryChange(category: string) {
    this.router.navigate(['/headlines'], { queryParams: { category } });
  }

}