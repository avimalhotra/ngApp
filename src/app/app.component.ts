import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule, CommonModule, ServerComponent, LoginComponent, ErrorComponent, HomeComponent, RouterModule,RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngApp';
  
}