import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'contact',component:ContactComponent}
    ])
  ],
  exports:[
    ContactComponent
  ]
})
export class ContactModule { }
