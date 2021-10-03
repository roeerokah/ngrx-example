import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movie-list/movies.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    children: [
      {
        path: ':movieId',
        component: MovieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
