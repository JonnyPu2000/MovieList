import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css']
})
export class ChangeAvatarDialog {

  data: string;

  constructor(private movieService: MovieService, private toastr: ToastrService) { }

  updateImage() {
    this.movieService.updateAvatar(this.data).then(res => {
      this.toastr.success("Foto atualizada com sucesso!");
    });
  }
}
