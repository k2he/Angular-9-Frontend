import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './notfound.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
//        outlet: 'popup'
    },
    {
        path: 'about',
        component: AboutComponent
//        loadChildren: 'app/admin/admin.module#AdminModule',
//        canLoad: [AuthGuard]
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
