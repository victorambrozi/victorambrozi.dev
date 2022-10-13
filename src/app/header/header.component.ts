import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {
    items: [
      {
        name: "Home",
        path: "/"
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
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
