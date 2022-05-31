import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {SuperuserRoutingModule} from "./superuser.routing.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SuperuserRoutingModule
  ]
})
export class SuperuserModule { }
