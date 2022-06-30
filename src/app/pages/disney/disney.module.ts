import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisneyInfoComponent } from './disney-info/disney-info.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DisneyInfoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: DisneyInfoComponent
      }
    ]),
  
  ]
})
export class DisneyModule { }
