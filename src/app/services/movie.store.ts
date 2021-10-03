import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

export interface MoviesState {
  movies: Movie[];
}

@Injectable()
export class MoviesStore extends ComponentStore<MoviesState> {
  constructor() {
    super({ movies: [] });
  }
  readonly movies$: Observable<MoviesState> = this.select((state) => state);

  selectMovie(movieId: string) {
    return this.select((state) => state.movies[movieId]);
  }
}
