import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../sevice/movies.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}

  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  imgKnownFor:any[] = [];
  trendingPeople:any[] = [];
  loading:boolean = false


  
  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies = response.results;
      this.loading = true

    })

    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv = response.results;   
      this.loading = true

    })

    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.trendingPeople = response.results;   
      this.loading = true

    })
  }

}
