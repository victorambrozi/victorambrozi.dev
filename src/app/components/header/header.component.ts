import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  header = {
    items: [
      {
        name: "Home",
        path: "/home"
      },
      {
        name: "Sobre",
        path: "/about"
      },
      {
        name: "Skills",
        path: "/skills"
      },
      {
        name: "Serviços",
        path: "/services"
      },
      {
        name: "Contato",
        path: "/contact"
      },
    ],
    assets: {
      logo: {
        path: "../../assets/sidebar/logo.svg",
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isActive = !this.isActive;
  }

}
