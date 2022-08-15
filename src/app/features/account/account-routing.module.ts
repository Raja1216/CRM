import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './views/account-details/views/account-details/account-details.component';
import { AccountComponent } from './views/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,

  },
  { path: ':id/account-details', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
