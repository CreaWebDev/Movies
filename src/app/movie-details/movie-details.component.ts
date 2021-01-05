import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../shared/interfaces';
import { Location } from '@angular/common';


@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent {
  title: string;
  movie: IMovie;  

  constructor(private service: DataService,
              private route: ActivatedRoute,
              private location: Location 
              ) { }

  ngOnInit() {
    this.title = 'Modify movie info';

    // go to the activated route
    let id = +this.route.snapshot.paramMap.get('id');
    
    this.getMovie(id);
  }
  
  getMovie(id): void {
    this.service.getMovie(id)
    .subscribe((movie: IMovie) => {
      this.movie = movie;
    })
  }
  
  goBack(): void {
    this.location.back();
  }
  
  save(movie: any): void {
    this.service.updateMoviesList(movie)
    .subscribe(() => this.goBack())
  }
  
}
