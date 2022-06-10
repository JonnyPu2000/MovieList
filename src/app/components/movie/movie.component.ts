import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/services/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() mode: 'my-list' | 'all';

  movies: IMovie[] = [];
  isLoading: boolean = true;
  myMovies: IMovie[] = [];

  constructor(private movieService: MovieService) { }
  
  async ngOnInit() {
    this.updateList();
  }


  async updateList() {
    this.myMovies = await this.movieService.getMyMovies();
    const movies = await this.setList();
    this.movies = movies;
    this.isLoading = false;
    this.verifyMovieStatus();
  }
  
  private setList() {
    if(this.mode === 'all') {
      return this.movieService.getMovies();
    }
    
    return this.myMovies.map(movie => ({...movie, isSaved: true}));
  }
  
  private verifyMovieStatus() {
    if(this.mode !== 'all') {
      return;
    }

    this.movies = this.movies.map(movie => {
      const isSaved = this.myMovies.find(myMovie => movie._id === myMovie._id) ? true : false;
      return {
        ...movie,
        isSaved: isSaved 
      }
    });
  }

}
