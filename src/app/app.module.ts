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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    PresentationComponent,
    ServicesComponent,
    FooterComponent,
    ContactBannerComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
