import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../sevice/movies.service';

@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {
  id:string = ''
  detailsPerson:any;
  imgComplete:string = 'https://image.tmdb.org/t/p/w500'
  loading:boolean = false

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService){
    this.id = _ActivatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this._MoviesService.getDetailsPerson(this.id).subscribe((response)=>{
      this.detailsPerson = response;
      this.loading = true

    })
  }
}
