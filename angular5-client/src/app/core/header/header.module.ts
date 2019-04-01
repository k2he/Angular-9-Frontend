import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../../material-module/material-module.module'
import { RouterModule } from '@angular/router';

import { HeaderComponent } from "./header.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
