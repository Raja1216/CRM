import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './views/header/header.component';
import { SidebarComponent } from './views/sidebar/sidebar.component';
import { SearchbarComponent } from './views/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, SearchbarComponent],
  imports: [CommonModule, NgSelectModule, FormsModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    SearchbarComponent,
    NgSelectModule,
  ],
})
export class SharedModule {}
