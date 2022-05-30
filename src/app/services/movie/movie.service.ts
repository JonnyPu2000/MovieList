import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any; 
  
  constructor(private httpClient: HttpClient) { }
  

  getMovies(): Observable<IMovie[]> {
    return this.httpClient.get<IMovie[]>('/FILMS/filmes');
  }
}
