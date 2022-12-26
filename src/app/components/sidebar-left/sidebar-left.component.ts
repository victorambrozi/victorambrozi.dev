import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar-left",
  templateUrl: "./sidebar-left.component.html",
  styleUrls: ["./sidebar-left.component.css"],
})
export class SidebarComponent implements OnInit {

  assets = {
    logo: {
      path: "../../assets/sidebar/logo.svg",
    },
    socialMedia: {
      instagram: {
        path: "../../assets/sidebar/instagram.svg",
      },
      linkedin: {
        path: "../../assets/sidebar/linkedin.svg",
      },
      github: {
        path: "../../assets/sidebar/github.svg",
      }
    },
  };
  links = {
    socialMedia: {
      instagram: "https://www.instagram.com/victorambrozi.dev/?next=%2F",
      linkedin: "https://www.linkedin.com/in/victorambrozi/",
      github: "https://github.com/victorambrozi",
    }
  }
  constructor() {
  }

  ngOnInit(): void {}
}
