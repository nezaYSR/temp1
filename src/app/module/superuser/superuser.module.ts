import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {SuperuserRoutingModule} from "./superuser.routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule
  ]
})
export class SuperuserModule { }
