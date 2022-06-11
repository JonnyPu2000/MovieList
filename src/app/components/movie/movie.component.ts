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
  @Input() set filter(res: string) {
    this.updateList(res)
  };

  movies: IMovie[] = [];
  isLoading: boolean = true;
  myMovies: IMovie[] = [];


  constructor(private movieService: MovieService) { }
  
  async ngOnInit() {
    this.updateList();
  }


  async updateList(filter: string="") {
    this.myMovies = await this.movieService.getMyMovies();
    const movies = await this.setList(filter);
    this.movies = movies;
    this.isLoading = false;
    this.verifyMovieStatus(filter);
  }
  
  private setList(filter: string) {
    if(this.mode === 'all') {
      return this.movieService.getMovies();
    }
    
    const formattedMovies = this.myMovies.map(movie => ({...movie, isSaved: true}));

    return filter ? formattedMovies.filter(movie => movie.title.toUpperCase().includes(filter.toUpperCase())) : formattedMovies;
  }
  
  private verifyMovieStatus(filter: string) {
    if(this.mode !== 'all') {
      return;
    }

    const formattedMovies = this.movies.map(movie => {
      const isSaved = this.myMovies.find(myMovie => movie._id === myMovie._id) ? true : false;
      return {
        ...movie,
        isSaved: isSaved 
      }
    });

    this.movies = filter ? formattedMovies.filter(movie => movie.title.toUpperCase().includes(filter.toUpperCase())) : formattedMovies;
  }

}
