import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode: 'login' | 'register' = 'login';

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(mode: 'login' | 'register') {
    this.mode = mode;
  }
}
