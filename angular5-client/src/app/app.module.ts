import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './notfound.component';
import { CoreModule } from './core/core.module';
import { MaterialModuleModule } from './material-module/material-module.module'
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

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
     LoginComponent,
     HeaderComponent,
     FooterComponent
  ],
  providers: [
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
