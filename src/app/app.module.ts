import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTES
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { AsideNavComponent } from './components/aside-nav/aside-nav.component';
import { AboutComponent } from './components/about/about.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { HomeSkillsComponent } from './components/home-skills/home-skills.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainComponent,
    AsideNavComponent,
    AboutComponent,
    HomeTitleComponent,
    HomeSkillsComponent,
    HomeServicesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
