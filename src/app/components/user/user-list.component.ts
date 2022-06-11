import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeAvatarDialog } from '../change-avatar/change-avatar.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  
  constructor(private router: Router, private dialogService: MatDialog) { }
  
  user: any;
  listFilter: string = "";
  
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '');
  }


  goToHome() {
    this.router.navigate(['home']);
  }

  goToMyList() {
    this.router.navigate(['my-list'])
  }

  openDialog() {
    this.dialogService.open(ChangeAvatarDialog, {
      height: '300px',
      width: '500px',
    });
  }

  filterList(newFilter: string) {
    this.listFilter = newFilter;
  }
}
