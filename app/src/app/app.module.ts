import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvComponent } from './tv/tv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GalleryComponent,
    HomeComponent,
    MoviesComponent,
    MoviedetailsComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    TvComponent,
    HeaderComponent,
    PeopleComponent,
    PeopledetailsComponent,
    TvdetailsComponent,
    
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
