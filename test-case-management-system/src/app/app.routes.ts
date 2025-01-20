import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent } from './pages/login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'project-details',
        component: ProjectDetailsComponent
    }
];
