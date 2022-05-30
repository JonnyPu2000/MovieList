import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-acess',
  templateUrl: './login-acess.component.html',
  styleUrls: ['./login-acess.component.css']
})
export class LoginAcessComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['home']);
  }

}
