import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './notfound.component';
import { CoreModule } from './core/core.module';
import { MaterialModuleModule } from './material-module/material-module.module'
import { HomeModule } from './home/home.module';
import { HttpSpinnerInterceptor } from './http-spinner-interceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { NewProjectCountService } from './services/newprojectcount.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    CoreModule,
    MaterialModuleModule,
    FormsModule,
    HomeModule,
    AppRoutingModule,//all other child route must go before app routing
  ],
  declarations: [
     AppComponent,
     DialogComponent,
     PageNotFoundComponent,
     SpinnerComponent,
     LoginComponent
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
