import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTES
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AsideNavComponent } from './aside-nav/aside-nav.component';
import { AboutComponent } from './about/about.component';
import { HomeTitleComponent } from './home-title/home-title.component';
import { HomeSkillsComponent } from './home-skills/home-skills.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { ContactComponent } from './contact/contact.component';

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
    ContactComponent
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
