import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-acess',
  templateUrl: './login-acess.component.html',
  styleUrls: ['./login-acess.component.css']
})
export class LoginAcessComponent implements OnInit {
  
  @Output() onChangeMode: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(private readonly router: Router, private fb: FormBuilder, private toastr: ToastrService, private authService: AuthService) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()) {
      return;
    };

    this.router.navigate(['home']);
  }
  
  async login() {
    const success = await this.authService.signIn(this.form.value);

    if(!success) {
      return;
    }
    this.toastr.success('Login efetuado com sucesso!')
    this.router.navigate(['home']);
  }


  goToRegister() {
    this.onChangeMode.emit();
  }
}
