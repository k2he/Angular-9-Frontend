import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoadAuthGuard } from './core/guard/load-auth-guard';
import { PublicPageGuard } from './core/guard/public-guard';
import { ActiveAuthGuard } from './core/guard/active-auth-guard';
import { AdminGuard } from './core/guard/admin-guard';

const routes: Routes = [
    {   
        path: 'login', 
        component: LoginComponent,
        canActivate: [PublicPageGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'projects',
        loadChildren: 'app/projects/projects.module#ProjectsModule',
        canLoad: [LoadAuthGuard],
        canActivate: [ActiveAuthGuard]
    },
    {
        path: 'courses',
        loadChildren: 'app/courses/courses.module#CoursesModule',
        canLoad: [LoadAuthGuard],
        canActivate: [ActiveAuthGuard]
    },
    {
        path: 'contact',
        loadChildren: 'app/contact/contact.module#ContactModule',
        canLoad: [LoadAuthGuard],
        canActivate: [ActiveAuthGuard]
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [LoadAuthGuard],
        canActivate: [ActiveAuthGuard, AdminGuard]
    },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
