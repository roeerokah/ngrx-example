import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private movies = new BehaviorSubject<any>([]);
  movies$ = this.movies.asObservable();
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get(
        `api/3/discover/movie?api_key=3e132923b372ba0fb74cf98017b0e708&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
      )
      .subscribe((movies) => this.movies.next(movies));

    this.httpClient
      .get(`image/t/p/w500/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg`)
      .subscribe((image) => console.log);
  }
}
