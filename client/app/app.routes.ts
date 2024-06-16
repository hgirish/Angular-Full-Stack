import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CatsComponent } from './cats/cats.component';

export const routes: Routes = [
    {
        path:'', component: AboutComponent,
        title: 'About Angular Full Stack'
    },
    {
        path: 'cats',
        component: CatsComponent,
        title: 'Cats'
    }
];
