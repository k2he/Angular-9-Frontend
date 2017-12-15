import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNaviComponent } from './side-navi.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideNaviComponent
  ],
  exports: [SideNaviComponent]
})
export class SideNaviModule { }
