import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from './components/content/content.component';
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    ContentComponent
  ]
})
export class SharedModule { }
