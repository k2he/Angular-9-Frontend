import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './notfound.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { HttpSpinnerInterceptor } from './http-spinner-interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { NewProjectCountService } from './services/newprojectcount.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTooltipModule,
    
    CoreModule,
    HomeModule,
    AppRoutingModule,//all other child route must go before app routing
  ],
  declarations: [
     AppComponent,
     DialogComponent,
     PageNotFoundComponent,
     SpinnerComponent
  ],
  providers: [
     {
         provide: HTTP_INTERCEPTORS,
         useClass: HttpSpinnerInterceptor,
         multi: true,
     },
     NewProjectCountService
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
