import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogGuard } from './guard/log.guard';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard] , component:HomeComponent},
  {path:'gallery', canActivate:[AuthGuard] , component:GalleryComponent},
  {path:'movies', canActivate:[AuthGuard] , component:MoviesComponent},
  {path:'tv', canActivate:[AuthGuard] , component:TvComponent},
  {path:'people', canActivate:[AuthGuard] , component:PeopleComponent},
  {path:'moviedetails/:id', canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path:'peopledetails/:id', canActivate:[AuthGuard] , component:PeopledetailsComponent},
  {path:'tvdetails/:id', canActivate:[AuthGuard] , component:TvdetailsComponent},
  {path:'login', canActivate:[LogGuard], component:LoginComponent},
  {path:'register', canActivate:[LogGuard], component:RegisterComponent},
  {path:'**', component:NotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],


exports: [RouterModule]
})
export class AppRoutingModule { }
