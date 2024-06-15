import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path:"", component:HomeComponent, pathMatch:"full", title:"Home "},
    { path:"login", component:LoginComponent, title:"Login" },
    { path:"server", component:ServerComponent, title:"Server" },
    { path:"**", component:ErrorComponent , title:"Error"},

];
