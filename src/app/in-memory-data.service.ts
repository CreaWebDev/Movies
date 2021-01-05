import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMovie } from './shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      {
        "id": 1,
        "No": 4112839,
        "Title": "Guardians of the Galaxy Vol. 2",
        "Year": 2017,
        "Genre": "Action, Adventure, Comedy, Sci-Fi",
        "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
        "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
      },
      {
        "id": 2,
        "No": 2489319,
        "Title": "The Hunt",
        "Year": 2011,
        "Genre": "Short, Horror, Sci-Fi, Thriller",
        "Actors": "Christopher Bower, Barbie Clark, Andrew Wiggins",
        "Plot": "A college student returns to his home town to find something in the woods is killing livestock and people. He joins the hunting party armed only with a camera as they march into the woods to face the unknown.",
      },
      {
        "id": 3,
        "No": 284531,
        "Title": "Late Night with O´Brian",
        "Year": 1997,
        "Genre": "Comedy, Music, Talk-Show",
        "Actors": "Joel Godard, Mark Hamill, Carey Lowell, The Mighty Mighty Bosstones",
        "Plot": "N/A"
      },
      { 
        "id": 4,
        "No": 281739,
        "Title": "Night before New Years",
        "Year": 2010, 
        "Genre": "Series", 
        "Actors": "Jakob Stegelmann, Stan Lee", 
        "Plot": "N/A" 
      },
      { 
        "id": 5,
        "No": 6239190,
        "Title": "Hello there!!",
        "Year": 2012, 
        "Genre": "Horror, Comedy, Lovestory", 
        "Actors": "Jakob Stegelmann, Stan Lee", 
        "Plot": "N/A"
      }
      ];
    return {movies};
  }
  // // Movie will always have an id
  // genId(movies: IMovie[]): number {
  //   return movies.length > 0 ? Math.max(...movies.map(movie => movie.ID)) + 1 : 11;
  // }

}

