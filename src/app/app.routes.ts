import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path:"", component:HomeComponent, pathMatch:"full", title:"Home "},
    { path:"login", component:LoginComponent, title:"Login" },
    { path:"login/:id", component:LoginComponent, title:"Login ID" },

    { path:"product", component:ProductComponent, title:"Product", children: [
        {path:"p1", component: ServerComponent, title:"Product p1"},
        { path:"p2", component: LoginComponent, title:"Product p2"}
    ] },
    { path:"server", component:ServerComponent, title:"Server" },
    { path:"**", component:ErrorComponent , title:"Error"},

];