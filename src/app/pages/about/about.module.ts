import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"about",component:AboutComponent}
    ])
  ],
  exports:[
    AboutComponent
  ]
})
export class AboutModule { }
