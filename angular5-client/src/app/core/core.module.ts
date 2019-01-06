import { ModuleWithProviders, NgModule, Optional, SkipSelf  } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { XHRBackend, Http, RequestOptions, HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { UtilService } from '../shared/services/util.service';
import { HttpSpinnerInterceptor } from './http-spinner-interceptor';
import { AuthenticationService } from "./service/authentication.service";
import { JwtInterceptor } from './service/jwt.interceptor';
import { LoadAuthGuard } from "./guard/load-auth-guard";
import { PublicPageGuard } from "./guard/public-guard";
import { JsonHttp } from "./service/custom-json-http";
import { ActiveAuthGuard } from "./guard/active-auth-guard";
import { NewProjectCountService } from './service/newprojectcount.service';
import { SpinnerComponent } from './spinner/spinner.component';

export function createJsonHttp(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
      console.log("createJsonHttp");
      const ngHttp = new Http(xhrBackend, requestOptions);
      return new JsonHttp(ngHttp);
}

@NgModule({
  imports: [
      CommonModule,
      HttpModule,
      RouterModule,
      HttpModule,
  ],
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [
    UtilService,
    {
        provide: JsonHttp,
        useFactory: createJsonHttp,
        deps: [XHRBackend, RequestOptions]
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpSpinnerInterceptor,
        multi: true,
    },
    { 
        provide: HTTP_INTERCEPTORS, 
        useClass: JwtInterceptor, 
        multi: true 
    },
    AuthenticationService,
    LoadAuthGuard,
    PublicPageGuard,
    ActiveAuthGuard,
    NewProjectCountService
  ],
})

export class CoreModule { 
    
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
          throw new Error(
            'CoreModule is already loaded. Import it in the AppModule only');
        }
      }
}
