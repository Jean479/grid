import { Routes } from '@angular/router';
import { PrimeNg } from './prime-ng/prime-ng';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    //{path: 'home', component: HomeComponent},
    //{path: 'about', component: AboutComponent},
    {path: 'primeNg', component: PrimeNg},
    {path: '**', redirectTo: '/home'     }
];
