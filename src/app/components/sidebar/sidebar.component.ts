import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
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
  constructor() {}

  ngOnInit(): void {}
}
