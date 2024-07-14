import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: 'inicio', component: HomeComponent, title: 'Inicio'},
    {path: 'productos', component: ProductsComponent, title: 'Productos'},
    {path: 'admin', component: AdminComponent, title: 'Administrador'},
    {path: 'ingreso', component: LoginComponent, title: 'Inicio de sesión'},
    {path: '', redirectTo: '/inicio', pathMatch: 'full', title: 'Inicio'},
    {path: '**', component: NotFoundComponent, title: '404'}
];
