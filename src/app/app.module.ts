import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavigationComponent } from './core/components/homemainnavigation/homenavigation.component';
import { OnsitetasksmainComponent } from './modules/onsitetasks/components/onsitetasksmain/onsitetasksmain.component';
import { LoginComponent } from './modules/users/components/Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { OnsitetaskscreateComponent } from './modules/onsitetasks/components/onsitetaskscreate/onsitetaskscreate.component';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OnsitetasksdetailsComponent } from './modules/onsitetasks/components/onsitetasksdetails/onsitetasksdetails.component';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomenavigationComponent,
    OnsitetasksmainComponent,
    LoginComponent,
    OnsitetaskscreateComponent,
    OnsitetasksdetailsComponent
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
    HttpClientModule,
    FormsModule,MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
