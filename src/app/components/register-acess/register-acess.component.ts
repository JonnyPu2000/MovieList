import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-acess',
  templateUrl: './register-acess.component.html',
  styleUrls: ['./register-acess.component.css']
})
export class RegisterAcessComponent implements OnInit {

  @Output() onRegister: EventEmitter<void> = new EventEmitter();
  @Output() onChangeMode: EventEmitter<void> = new EventEmitter();

  form: FormGroup;

  constructor(private readonly router: Router, private fb: FormBuilder, private toastr: ToastrService, private authService: AuthService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if(!this.authService.isAuthenticated()) {
      return;
    };

    this.router.navigate(['home']);
  }


  async register() {
    if(this.form.value.password !== this.form.value.confirmPassword) {
      this.toastr.error("As senhas não conferem");
    }

    const isCreated = await this.authService.signup(this.form.value);

    if(isCreated) {
      this.toastr.success("Cadastro efetuado com sucesso!", "Faça login para entrar");
      this.goToLogin();
      return;
    }

    this.toastr.error("Erro inesperado");
  }

  goToLogin() {
    this.onChangeMode.emit();
  }
}
