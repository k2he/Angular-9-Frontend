import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
//import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './shared/notfound.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
//        loadChildren: 'app/admin/admin.module#AboutComponentModule',
    },
    {
        path: 'projects',
        component: ProjectsComponent,
//        loadChildren: 'app/projects/projects.module#ProjectsModule',
//        canLoad: [AuthGuard]
    },
    {
        path: 'courses',
        loadChildren: 'app/courses/courses.module#CoursesModule',
//        canLoad: [AuthGuard]
    },
    {
        path: 'contact',
        component: ContactComponent
//        loadChildren: 'app/contact/admin.module#AboutModule',
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
