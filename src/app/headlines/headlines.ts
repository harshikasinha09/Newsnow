// import { Component } from '@angular/core';
// import { Myservice } from '../myservice';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-headlines',
//   imports: [CommonModule,FormsModule,RouterLink],
//   providers:[Myservice],
//   templateUrl: './headlines.html',
//   styleUrl: './headlines.css'
// })
// export class Headlines {
//  newsList: any[] = [];
//  localNews: any[] = [];
//  editorsPicks: any[] = [];
//  featuredNews: any;
//  photoStory:any;
//  featuredCategories: any[] = [];
//  categoryCards: any[] = [];

// currentYear: number = new Date().getFullYear();

//   constructor(private myservice: Myservice,private router:Router) {}

//   ngOnInit(): void {
//   this.myservice.getTopHeadlines().subscribe({
//   next: (data: any) => {
//     this.newsList = data.articles.filter((article: any) =>
//       article.title && article.url && article.urlToImage).slice(0, 6);
//   }
// });

//   this.myservice.getLocalNews().subscribe({
//       next: (data: any) => {
//         console.log("Local News:", data.articles);
//         this.localNews = data.articles.slice(0, 6);
//       }
//     });

//     this.myservice.getTopHeadlines().subscribe({
//   next: (data: any) => {
//     console.log("editors picks:", data.articles);
//     this.editorsPicks = data.articles.filter((article: any) =>
//       article.title && article.url && article.urlToImage).slice(0, 4);
//   }
// });


//  this.myservice.getLocalNews().subscribe({
//       next: (data: any) => {
//         if (data.articles && data.articles.length > 0) {
//           this.featuredNews = data.articles[3];
//         }
//       }
//     });


//  this.myservice.getLocalNews().subscribe({
//       next: (data: any) => {
//         if (data.articles && data.articles.length > 0) {
//           this.photoStory = data.articles[5];
//         }
//       }
//     });


//     this.myservice.getbbcnews().subscribe({
//       next: (data: any) => {
//         if (data.articles && data.articles.length > 0) {
//           this.photoStory = data.articles[0];
//         }
//       }
//     });




//      const categories = [
//       { name: 'Technology', fetch: this.myservice.getTechnologyNews() },
//       { name: 'Business', fetch: this.myservice.getBusinessNews() },
//       { name: 'Sports', fetch: this.myservice.getSportsNews() },
//       { name: 'Health', fetch: this.myservice.getHealthNews() },
//       { name: 'Entertainment', fetch: this.myservice.getEntertainmentNews() },
//       { name: 'Politics', fetch: this.myservice.getPolitics() }

//     ];

//     categories.forEach(cat => {
//     cat.fetch.subscribe({
//       next: (data: any) => {
//         if (data.articles && data.articles.length > 0) {
//           const article = data.articles[1];
//           this.categoryCards.push({
//             category: cat.name,
//             title: article.title,
//             description: article.description,
//             image: article.urlToImage || 'https://via.placeholder.com/400x250?text=No+Image',
//             url: article.url
//           });
//         }
//       },
//       error: (err) => {
//         console.error(`Error loading ${cat.name} news:`, err);
//       }
//     });
//   });
//   }
// }




import { Component } from '@angular/core';
import { Myservice } from '../myservice';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryNews } from '../category-news/category-news';
import { WeatherNews } from '../weather-news/weather-news';

@Component({
  selector: 'app-headlines',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,CategoryNews,WeatherNews],
  providers: [Myservice],
  templateUrl: './headlines.html',
  styleUrl: './headlines.css'
})
export class Headlines {
  newsList: any[] = [];
  localNews: any[] = [];
  editorsPicks: any[] = [];
  featuredNews: any;
  photoStory: any;
  categoryCards: any[] = [];
  weatherNews: any[] = [];

  currentYear: number = new Date().getFullYear();

  constructor(private myservice: Myservice, private router: Router) {}


  weather: any = null;


  ngOnInit(): void {

    console.log('Headlines component loaded');

    this.myservice.getTopHeadlines().subscribe({
      next: (data: any) => {
        console.log("Top Headlines:", data);
        this.newsList = data.articles?.filter((article: any) =>
          article.title && article.url && article.urlToImage)?.slice(0, 6) || [];
      },
      error: (err) => console.error("Top Headlines Error:", err)
    });

    this.myservice.getLocalNews().subscribe({
      next: (data: any) => {
        console.log("Local News:", data);
        this.localNews = data.articles?.slice(0, 6) || [];
        this.featuredNews = data.articles?.[3];
      },
      error: (err) => console.error("Local News Error:", err)
    });

    this.myservice.getTopHeadlines().subscribe({
      next: (data: any) => {
        console.log("Editors Picks:", data);
        this.editorsPicks = data.articles?.filter((article: any) =>
          article.title && article.url && article.urlToImage)?.slice(0, 4) || [];
      },
      error: (err) => console.error("Editors Picks Error:", err)
    });

    this.myservice.getbbcnews().subscribe({
      next: (data: any) => {
        console.log("BBC Photo Story:", data);
        this.photoStory = data.articles?.[0];
      },
      error: (err) => console.error("BBC News Error:", err)
    });

    const categories = [
      { name: 'Technology', fetch: this.myservice.getTechnologyNews() },
      { name: 'Business', fetch: this.myservice.getBusinessNews() },
      { name: 'Sports', fetch: this.myservice.getSportsNews() },
      { name: 'Health', fetch: this.myservice.getHealthNews() },
      { name: 'Entertainment', fetch: this.myservice.getEntertainmentNews() },
      { name: 'Politics', fetch: this.myservice.getPolitics() }
    ];

    categories.forEach(cat => {
      cat.fetch.subscribe({
        next: (data: any) => {
          if (data.articles && data.articles.length > 1) {
            const article = data.articles[1];
            this.categoryCards.push({
              category: cat.name,
              title: article.title,
              description: article.description,
              image: article.urlToImage || 'https://via.placeholder.com/400x250?text=No+Image',
              url: article.url
            });
          }
        },
        error: (err) => {
          console.error(`Error loading ${cat.name} news:`, err);
        }
      });
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

