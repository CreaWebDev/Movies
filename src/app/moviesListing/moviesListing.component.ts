import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { IMovie } from '../shared/interfaces';
import { ModalComponent } from '../modals/modal.component';

@Component({
  selector: 'app-moviesListing',
  templateUrl: './moviesListing.component.html',
  styleUrls: ['./moviesListing.component.css'],
})

export class MoviesListingComponent implements OnInit {
  
  newMovie: IMovie; 

  _id: number;
  _no: number;
  _title: string;
  _year: number;
  _genre: string;
  _plot: string;
  _actors: string;
  
  movies: IMovie[] = [];
  moviesList: IMovie[] = [];
  
  searchTerm:string="";
  direction:string="asc";
  column:string="movie.genre";
  type:string="string";
  
  // setSortParams(param){
  //   this.direction=param.dir;
  //   this.column=param.col;
  //   this.type=param.typ;
  // }

  constructor(
    private service: DataService,
    public dialog: MatDialog
    ) { }
    
    ngOnInit() {
      this.getmovies();
    }
    
    getmovies(): void {
      this.service.getMoviesList()
      .subscribe((moviesList: IMovie[]) => this.movies = moviesList);
      
    }


  // config for modal
  openCreateModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: "600px",
      closeOnNavigation: false,
      disableClose: true,
      data: {
        title: 'create new',
        actionButtonText: "Save",
        ID: this._id,
        No: this._no,
        Title: this._title,
        Year: this._year,
        Genre: this._genre,
        Plot: this._plot,
        Actors: this._actors
      }
    });
    // receiving data back from the modal
    dialogRef.afterClosed().subscribe( result => {
      this.newMovie = result;
      if (result) {
        this.movies.push(result);
      }
    })
  }

  delete(movie: any) : void {
    this.movies = this.movies.filter(p => p !== movie);
    this.service.deleteMovie(movie).subscribe();
  }
  
}
