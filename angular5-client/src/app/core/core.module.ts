import { ModuleWithProviders, NgModule, Optional, SkipSelf  } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { XHRBackend, Http, RequestOptions, HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";

import { UtilService } from '../shared/services/util.service';
import { AuthenticationService } from "./service/authentication.service";
import { AuthGuard } from "./guard/auth-guard";
import { PublicPageGuard } from "./guard/public-guard";
import { JsonHttp } from "./service/custom-json-http";
import { AuthGuardCanActive } from "./guard/canActive-auth-guard";
import { NewProjectCountService } from '../services/newprojectcount.service';


export function createJsonHttp(xhrBackend: XHRBackend, requestOptions: RequestOptions) {
      console.log("createJsonHttp");
      const ngHttp = new Http(xhrBackend, requestOptions);
      return new JsonHttp(ngHttp);
}

@NgModule({
  imports: [
      CommonModule,
      HttpModule,
      MatToolbarModule,
      MatButtonModule,
  ],
  declarations: [
  ],
  exports: [
      MatToolbarModule,
      MatButtonModule,
  ],
  providers: [
      UtilService,
      {
            provide: JsonHttp,
            useFactory: createJsonHttp,
            deps: [XHRBackend, RequestOptions]
      },
      AuthenticationService,
      AuthGuard,
      PublicPageGuard,
      AuthGuardCanActive,
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
