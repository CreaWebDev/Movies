import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'; 

import { Observable, throwError, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IMovie } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  movieAdded = new Subject<IMovie>();

  private dbUrl = 'api/movies';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) {}


  getMoviesList() : Observable<IMovie[]> {
    return this.http.get<IMovie[]>(this.dbUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getMovie(id: number) : Observable<IMovie> {
    return this.http.get<IMovie[]>(this.dbUrl)
    .pipe(
      map(movies => {
        let movie = movies.filter((pa: IMovie) => pa.id === id);
        return (movie) ? movie[0] : null;
      }),
      catchError(this.handleError)
    )
  }
  
  
  createMovie(modalData: IMovie) : Observable<IMovie> {
    return this.http.post<IMovie>(this.dbUrl, modalData, this.httpOptions).pipe(
      catchError(this.handleError)
      );
  }
  
  deleteMovie(movie: IMovie | number ) : Observable<IMovie> {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.dbUrl}/${id}`;
    
    return this.http.delete<IMovie>(url, this.httpOptions).pipe(
      catchError(this.handleError)
      );
  }
  
  updateMoviesList(movie: IMovie) : Observable<IMovie[]> {
    return this.http.put<IMovie[]>(this.dbUrl, movie, this.httpOptions).pipe(
      catchError(this.handleError)
      );
  }
  
  
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
        
}    
      
      