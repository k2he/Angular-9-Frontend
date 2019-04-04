import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoreModule } from './core/core.module';
import { MaterialModuleModule } from './material-module/material-module.module'
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './core/header/header.module';
import { FooterComponent } from './core/footer/footer.component';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    CoreModule,
    MaterialModuleModule,
    FormsModule,
    HomeModule,
    HeaderModule,
    // configure the imports
    HttpClientModule,
    // config for Ngx translate
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    AppRoutingModule,//all other child route must go before app routing
  ],
  declarations: [
     AppComponent,
     DialogComponent,
     PageNotFoundComponent,
     LoginComponent,
     FooterComponent,
  ],
  providers: [
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
