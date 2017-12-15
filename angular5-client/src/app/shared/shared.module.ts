import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CustomCurrencyPipe } from '../shared/pipes/custom-currency.pipe';
import { CustomCurrencyFormatterDirective } from '../shared/directives/custom-currency-formatter.directive';
import { SideNaviComponent } from './side-navi/side-navi.component';
import { PageNotFoundComponent } from './notfound.component';
import { UtilService } from './services/util.service';

@NgModule({
  imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
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
        
        HttpClientModule,
        FormsModule,
  ],
  declarations: [
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        SideNaviComponent,
        PageNotFoundComponent
  ],
  exports: [
        BrowserModule,
        ReactiveFormsModule,
        MatInputModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule,
        MatSortModule,
        MatMenuModule,
        CustomCurrencyPipe,
        CustomCurrencyFormatterDirective,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        SideNaviComponent,
        PageNotFoundComponent,
        RouterModule,
   ],
   providers: [
        CustomCurrencyPipe,
        UtilService
   ]

})
export class SharedModule { }
