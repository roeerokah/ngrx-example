import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from './models/movie.model';
import { tap } from 'rxjs/operators';
import { MoviesStore } from './services/movie.store';

@Injectable()
export class MoviesService {
  private movies = new BehaviorSubject<any>([]);
  movies$ = this.movies.asObservable();
  constructor(
    private httpClient: HttpClient,
    private moviesStore: MoviesStore
  ) {
    this.httpClient
      .get(
        `api/3/discover/movie?api_key=3e132923b372ba0fb74cf98017b0e708&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .subscribe((movies) => this.movies.next(movies));
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.httpClient
      .get<Movie>(
        `api/3/movie/${movieId}?api_key=3e132923b372ba0fb74cf98017b0e708`
      )
      .pipe(
        tap((movie: Movie) => {
          this.moviesStore.patchState((state) => ({
            movies: [...state.movies, movie],
          }));
        })
      );
  }
}
