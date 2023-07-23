import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './acess/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserCountComponent } from './user-count/user-count.component';
import { UserformComponent } from './Shared/userform/userform.component';
import { AcessRoutingModule } from './acess/acess-routing.module';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { NewUserEditComponent } from './Pages/new-user-edit/new-user-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    UserCountComponent,
    UserformComponent,
    DashboardComponent,
    NewUserEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    AcessRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
