import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContainerComponent } from './features/container/container.component';
import { AccountModule } from './features/account/account.module';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AccountModule,

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
