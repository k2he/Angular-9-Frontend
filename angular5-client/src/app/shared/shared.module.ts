import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';

import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { CustomCurrencyFormatterDirective } from '../shared/directives/custom-currency-formatter.directive';
import { SideNaviComponent } from '../side-navi/side-navi.component';

@NgModule({
  imports: [
        CommonModule,
        RouterModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        HttpClientModule,
        
  ],
  declarations: [
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        SideNaviComponent
  ],
  exports: [
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        MatListModule,
        MatSidenavModule,
        
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        HttpClientModule,
        FormsModule,
        RouterModule,
        SideNaviComponent,
   ]

})
export class SharedModule { }
