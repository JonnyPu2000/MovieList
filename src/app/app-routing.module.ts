import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterAcessComponent } from './components/register-acess/register-acess.component';
import { UserListComponent } from './components/user/user-list.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterAcessComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'my-list', component: UserListComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
