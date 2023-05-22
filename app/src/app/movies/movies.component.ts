import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../sevice/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private _MoviesService:MoviesService){}

  trendingMovies:any;
  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  loading:boolean = false

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies = response.results;
      this.loading = true
    })
  }

}
