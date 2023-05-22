import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../sevice/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}

  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  trendingTv:any[] = [];
  loading:boolean = false


  ngOnInit(): void {
    this._MoviesService.getTrending('tv').subscribe((response)=>{
      this.trendingTv = response.results;
      this.loading = true

    })

  }
}
