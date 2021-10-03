import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { MoviesStore } from '../services/movie.store';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private moviesStore: MoviesStore
  ) {}

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params['movieId'];
    console.log(movieId);
    this.moviesService.getMovie(movieId).subscribe();
    this.moviesStore.selectMovie(movieId).subscribe(console.log);
  }
}
