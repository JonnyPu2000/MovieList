import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IMovie } from 'src/app/services/movie/movie.model';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() data: IMovie;
  @Output() onAction: EventEmitter<void> = new EventEmitter<void>();


  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  async save() {
    await this.movieService.save(this.data._id);
    this.toastr.success(`${this.data.title} foi adicionado a lista`)
    this.onAction.emit();
  }

  async remove() {
    await this.movieService.remove(this.data._id);
    this.toastr.success(`${this.data.title} foi removido da lista`)
    this.onAction.emit();
  }
}
