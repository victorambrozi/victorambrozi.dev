import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {
    items: {
      home: {
        name: "Home",
        path: "/"
      },
      projects: {
        name: "Projetos",
        path: "/projects"
      },
      contact: {
        name: "Contato",
        path: "/contact"
      },
      about: {
        name: "Sobre",
        path: "/about"
      },
      service: {
        name: "Serviços",
        path: "/services"
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
