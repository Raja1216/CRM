import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SearchbarComponent
  ],
})
export class SharedModule { }
