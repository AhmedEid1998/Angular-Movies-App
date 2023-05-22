import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../sevice/movies.service';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}

  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  detailsPerson:any[] = [];
  id:string = ''
  loading:boolean = false

  ngOnInit(): void {

    this._MoviesService.getTrending('movie').subscribe((response)=>{
      this.trendingMovies = response.results.slice(0,10);
      this.loading = true
    })

    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv = response.results.slice(0,10);
      this.loading = true
    })

    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.trendingPeople = response.results.slice(0,10);
      this.loading = true
    })

    this._MoviesService.getDetailsPerson(this.id).subscribe((response)=>{
      this.detailsPerson = response
    })
  }

}

