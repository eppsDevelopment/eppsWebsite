import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './main-nav/aboutus/aboutus.component';
import {ContactusComponent} from './main-nav/contactus/contactus.component';
import {AppComponent} from '././app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {path: '',component: AppComponent},
  {path:'aboutus',component: AboutusComponent},
  {path:'contactus',component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
