import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../sevice/movies.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
  id:string = ''
  details:any;
  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  loading:boolean = false

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){
    this.id = _ActivatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this._MoviesService.getDetailsTv(this.id).subscribe((response)=>{
      this.details = response
      this.loading = true

    })
  }

}
