import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './views/account/account.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountDetailsComponent } from './views/account-details/views/account-details/account-details.component';
import { AccountAddEditModalComponent } from './views/modal/account-add-edit-modal/account-add-edit-modal.component';



@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailsComponent,
    AccountAddEditModalComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ]
})
export class AccountModule { }
