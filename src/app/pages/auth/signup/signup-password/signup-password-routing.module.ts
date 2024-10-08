import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupPasswordPage } from './signup-password.page';

const routes: Routes = [
  {
    path: '',
    component: SignupPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupPasswordPageRoutingModule {}
