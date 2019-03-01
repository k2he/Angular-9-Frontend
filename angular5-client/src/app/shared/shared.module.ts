import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MaterialModuleModule } from '../material-module/material-module.module'
import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { CustomCurrencyFormatterDirective } from '../shared/directives/custom-currency-formatter.directive';
import { SideNaviComponent } from './side-navi/side-navi.component';

@NgModule({
  imports: [
        CommonModule,
        RouterModule,

        MaterialModuleModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule,
  ],
  declarations: [
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        SideNaviComponent,
  ],
  exports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSidenavModule,
        MatCardModule,
        
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        FormsModule,
        RouterModule,
        SideNaviComponent,
   ]

})
export class SharedModule { }
