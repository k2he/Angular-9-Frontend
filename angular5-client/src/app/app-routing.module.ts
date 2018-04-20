import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound.component';

const routes: Routes = [
    {   
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    /* Haven't figure out if I need this section, but leave it here for now
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
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
