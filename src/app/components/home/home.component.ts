import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeAvatarDialog } from '../change-avatar/change-avatar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dialogService: MatDialog) { }

  user: any;

  listFilter: string = "";
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }

  openDialog() {
    this.dialogService.open(ChangeAvatarDialog, {
      height: '300px',
      width: '500px',
    });
  }


  goToHome() {
    this.router.navigate(['home']);
  }

  goToMyList() {
    this.router.navigate(['my-list'])
  }

  filterList(newFilter: string) {
    this.listFilter = newFilter;
  }
}
