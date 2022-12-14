import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {SuperuserRoutingModule} from "./superuser.routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ErmsAdminComponent } from './erms-admin/erms-admin.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    ErmsAdminComponent
  ],
    imports: [
        SharedModule,
        CommonModule,
        SuperuserRoutingModule,
        FormsModule
    ]
})
export class SuperuserModule { }
