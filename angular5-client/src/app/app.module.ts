import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './notfound.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ContactusService } from './contact/contactus.service';
import { UtilService } from './util.service';
import { SideNaviComponent } from './side-navi/side-navi.component';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    CoursesComponent,
    ContactComponent,
    PageNotFoundComponent,
    SideNaviComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule,

    ProjectsModule,
    AppRoutingModule,//all other child route must go before app routing
  ],
  providers: [ContactusService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
