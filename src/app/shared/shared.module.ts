import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    ContentComponent
  ]
})
export class SharedModule { }
