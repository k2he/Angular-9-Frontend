import { ModuleWithProviders, NgModule, Optional, SkipSelf  } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { UtilService } from '../shared/services/util.service';

@NgModule({
  imports: [
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
        UtilService
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
