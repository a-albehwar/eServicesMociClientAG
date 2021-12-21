import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavigationComponent } from './core/components/homemainnavigation/homenavigation.component';
import { OnsitetasksmainComponent } from './modules/onsitetasks/components/onsitetasksmain/onsitetasksmain.component';
import { LoginComponent } from './modules/users/components/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { OnsitetaskscreateComponent } from './modules/onsitetasks/components/onsitetaskscreate/onsitetaskscreate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomenavigationComponent,
    OnsitetasksmainComponent,
    LoginComponent,
    OnsitetaskscreateComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
