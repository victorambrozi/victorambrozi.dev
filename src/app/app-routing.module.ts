import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { HomeSkillsComponent } from "./home-skills/home-skills.component";
import { HomeServicesComponent } from "./home-services/home-services.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeTitleComponent } from './home-title/home-title.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
  path: "home",
  component: HomeTitleComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "skills",
    component: HomeSkillsComponent,
  },
  {
    path: "services",
    component: HomeServicesComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
