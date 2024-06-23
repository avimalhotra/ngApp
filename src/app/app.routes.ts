import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { ErrorComponent } from './error/error.component';
import { authGuard } from './auth.guard';
import { logOutGuard } from './log-out.guard';

export const routes: Routes = [
    { path:"", component:HomeComponent, pathMatch:"full", title:"Home "},
    { path:"search", component:SearchComponent, title:"Search" },

    // { path:"login", component:LoginComponent, title:"Login", canActivate:[authGuard] },
    { path:"login", title:"Login", loadComponent: ()=> import('./login/login.component').then(m=>m.LoginComponent), canDeactivate:[logOutGuard]},

    { path:"login/:id", component:LoginComponent, title:"Login ID" },

    { path:"product", component:ProductComponent, title:"Product", canActivateChild:[authGuard] ,children: [
        {path:"p1", component: ServerComponent, title:"Product p1"},
        { path:"p2", component: LoginComponent, title:"Product p2"}
    ] },
    { path:"server", component:ServerComponent, title:"Server" },
    { path:"**", component:ErrorComponent , title:"Error"},

];