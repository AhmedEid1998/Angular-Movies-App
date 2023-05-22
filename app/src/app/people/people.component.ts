import { MoviesService } from '../sevice/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  constructor(private _MoviesService:MoviesService){}

  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  trendingPeople:any[] = [];
  loading:boolean = false

  ngOnInit(): void {

    

    this._MoviesService.getTrending('person').subscribe((response)=>{
      this.trendingPeople = response.results;
      this.loading = true

    })
  }
}
