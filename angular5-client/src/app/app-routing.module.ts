import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './notfound.component';
import { AuthGuard } from './core/guard/auth-guard';
import { PublicPageGuard } from './core/guard/public-guard';

const routes: Routes = [
    {   
        path: 'login', 
        component: LoginComponent,
        canActivate: [PublicPageGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [PublicPageGuard] 
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
        canLoad: [AuthGuard]
    },
    {
        path: 'courses',
        loadChildren: 'app/courses/courses.module#CoursesModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule',
        canLoad: [AuthGuard]
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
