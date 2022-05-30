import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/services/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: IMovie[] = [];
  isLoading: boolean = true;

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(res => {
      this.movies = res;
      this.isLoading = false;
    })
  }

}
