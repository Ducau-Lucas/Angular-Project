import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MissionsComponent } from './missions/missions.component';
import { MetiersComponent } from './metiers/metiers.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: AccueilComponent
  },
  {
    path: "missions", component: MissionsComponent
  },
  {
    path: "metiers", component: MetiersComponent
  },
  {
    path: "contact", component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
