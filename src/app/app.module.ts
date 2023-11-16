import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { PartnersComponent } from './partners/partners.component';
import { ProjetsComponent } from './projets/projets.component';
import { StatsComponent } from './stats/stats.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MissionsComponent } from './missions/missions.component';
import { MetiersComponent } from './metiers/metiers.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AccueilCardsComponent } from './accueil-cards/accueil-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PresentationComponent,
    ServicesComponent,
    FooterComponent,
    ContactBannerComponent,
    PartnersComponent,
    ProjetsComponent,
    StatsComponent,
    AccueilComponent,
    MissionsComponent,
    MetiersComponent,
    ContactPageComponent,
    AccueilCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
