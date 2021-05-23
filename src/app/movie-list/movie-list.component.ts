import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieListComponent implements OnInit {
  movies;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.movieService.movies$;
  }

  movieId(id, movie) {
    return movie.id;
  }
}
