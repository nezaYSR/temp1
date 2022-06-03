import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RiskadminRoutingModule } from './riskadmin-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RiskadminRoutingModule
  ]
})
export class RiskadminModule { }
