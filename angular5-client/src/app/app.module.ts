import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
//import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ContactusService } from './contact/contactus.service';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
//    CoursesComponent,
    ContactComponent
  ],
  imports: [
    SharedModule,

    ProjectsModule,
    AppRoutingModule,//all other child route must go before app routing
  ],
  providers: [ContactusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
