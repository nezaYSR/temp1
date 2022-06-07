import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from "@angular/router";
import { ForRolesDirective } from './directives/for-roles.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    FooterComponent,
    ContentComponent,
    ForRolesDirective,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    ContentComponent,
    ForRolesDirective
  ]
})
export class SharedModule { }
