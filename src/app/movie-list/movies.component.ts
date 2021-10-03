import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MoviesStore } from '../services/movie.store';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MoviesService, MoviesStore],
})
export class MoviesComponent implements OnInit {
  movies;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.movieService.movies$;
  }

  movieId(id, movie) {
    return movie.id;
  }
}
