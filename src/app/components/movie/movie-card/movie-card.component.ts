import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from 'src/app/services/movie/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() data: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
