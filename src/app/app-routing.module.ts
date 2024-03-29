import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReposComponent } from './components/repos/repos.component';
import { AppGuard } from './guards/app.guard';
import { AppResolver } from './resolvers/app.resolver';
import {OwnerComponent} from './components/owner/owner.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthFormComponent,
    canActivate: [AppGuard],
    pathMatch: 'full',
  },
  {
    path: 'repos',
    component: ReposComponent,
    canActivate: [AppGuard],
    resolve: [AppResolver],
    pathMatch: 'full',
  },
  {
    path: 'owners',
    component: OwnerComponent,
    canActivate: [AppGuard],
    resolve: [AppResolver],
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
