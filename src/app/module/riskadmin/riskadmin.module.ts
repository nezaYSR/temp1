import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskadminRoutingModule } from './riskadmin-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RiskadminRoutingModule
  ]
})
export class RiskadminModule { }
