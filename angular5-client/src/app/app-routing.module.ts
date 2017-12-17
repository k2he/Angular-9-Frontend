import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
//import { CoursesComponent } from './courses/courses.component';
//import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './notfound.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
//        loadChildren: 'app/home/home.module#AboutComponentModule',
    },
    /* Haven't figure out if I need this section
    {
        path: 'about',
        loadChildren: 'app/about/about.module#AboutModule',
    },
    */
    {
        path: 'projects',
        loadChildren: 'app/projects/projects.module#ProjectsModule',
//        canLoad: [AuthGuard]
    },
    {
        path: 'courses',
        loadChildren: 'app/courses/courses.module#CoursesModule',
//        canLoad: [AuthGuard]
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule',
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
