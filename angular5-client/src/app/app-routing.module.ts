import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LoadAuthGuard } from './guard/load-auth-guard';
import { PublicPageGuard } from './guard/public-guard';
import { ActiveAuthGuard } from './guard/active-auth-guard';
import { AdminGuard } from './guard/admin-guard';

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
    {
        path: 'test-apis',
        loadChildren: 'app/test-apis/test-apis.module#TestApisModule',
        canLoad: [LoadAuthGuard],
        canActivate: [ActiveAuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
