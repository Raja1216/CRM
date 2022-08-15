import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './features/container/container.component';

const routes: Routes = [
  {
    path: 'oms',
    component: ContainerComponent,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('./features/account/account.module').then((m) => m.AccountModule),
      },
    ]
  },
  {
    path: '',
    redirectTo: '/oms/account',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
