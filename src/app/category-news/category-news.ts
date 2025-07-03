import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-news',
  imports: [CommonModule,FormsModule],
  templateUrl: './category-news.html',
  styleUrl: './category-news.css'
})
export class CategoryNews {
  category: string = '';
  categoryNews: any[] = [];
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private service: Myservice) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('categoryName') || '';
      this.fetchCategoryNews();
    });
  }

  fetchCategoryNews() {
    let apiCall;

    switch (this.category.toLowerCase()) {
      case 'technology':
        apiCall = this.service.getTechnologyNews();
        break;
      case 'business':
        apiCall = this.service.getBusinessNews();
        break;
      case 'sports':
        apiCall = this.service.getSportsNews();
        break;
      case 'health':
        apiCall = this.service.getHealthNews();
        break;
      case 'entertainment':
        apiCall = this.service.getEntertainmentNews();
        break;
      case 'politics':
        apiCall = this.service.getPolitics();
        break;
      default:
        this.errorMessage = 'Unknown category selected.';
        return;
    }

    apiCall.subscribe({
      next: (data: any) => {
        this.categoryNews = data.articles?.map((article: any) => ({
          ...article,
          urlToImage: article.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'
        })) || [];
      },
      error: (err) => {
        if (err.status === 429) {
          this.errorMessage = 'API rate limit exceeded. Try again after midnight UTC.';
        } else {
          this.errorMessage = 'Failed to load news. Please try again later.';
        }
      }
    });
  }

}
