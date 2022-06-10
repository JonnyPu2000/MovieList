import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthHttpClientService } from '../auth-http-client/auth-http-client.service';
import { IMovie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: any; 
  user;
  
  constructor(private authClient: AuthHttpClientService) {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }
  

  getMovies(): Promise<IMovie[]> {
    const response = this.authClient.get<{data: IMovie[]}>('/BACKEND/filmes');
    return firstValueFrom(response).then(res => res.data);
  }

  getMyMovies() {
    const response = this.authClient.get<{data: IMovie[]}>(`/BACKEND/filmes/list?email=${this.user.email}`);
    return firstValueFrom(response).then(res => res.data);
  }

  save(movieId: string) {
    const payload = {
      movieId,
      email: this.user.email
    }
    const response = this.authClient.post<{data: IMovie[]}>(`/BACKEND/filmes/list`, payload);
    return firstValueFrom(response).then(res => res.data);
  }

  remove(movieId: string) {
    const response = this.authClient.delete<{data: IMovie[]}>(`/BACKEND/filmes/list?movieId=${movieId}&email=${this.user.email}`);
    return firstValueFrom(response).then(res => res.data);
  }

  async updateAvatar(imageUrl: string) {
    const payload = {
      imageUrl,
      email: this.user.email
    }

    const response = this.authClient.put<any>(`/BACKEND/user`, payload);
    const user = await firstValueFrom(response).then(res => res.data);
    localStorage.setItem('user', JSON.stringify(user));
  }
}
