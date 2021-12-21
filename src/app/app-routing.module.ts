import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {LoginComponent} from './modules/users/components/Login/login.component'
import { HomenavigationComponent } from './core/components/homemainnavigation/homenavigation.component';
import { OnsitetasksmainComponent } from './modules/onsitetasks/components/onsitetasksmain/onsitetasksmain.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: HomenavigationComponent },
  { path: 'OnSiteTasks', component: OnsitetasksmainComponent },
  { path: '',   redirectTo: '/Login', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
