import { Routes } from '@angular/router';
import { Headlines } from './headlines/headlines';
import { CategoryNews } from './category-news/category-news';

export const routes: Routes = [
      { path: '', component: Headlines},
      { path: 'category/:categoryName', component: CategoryNews },
];
