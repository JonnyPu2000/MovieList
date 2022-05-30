import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router: Router) { }

  signIn: boolean = true;

  ngOnInit(): void {
  }

  setSignMethod(status: boolean) {
    this.signIn = status;
  }

  handleRegister() {
    this.signIn = true;
  }
}
