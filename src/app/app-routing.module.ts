import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { HomeSkillsComponent } from "./components/home-skills/home-skills.component";
import { HomeServicesComponent } from "./components/home-services/home-services.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeTitleComponent } from "./components/home-title/home-title.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
