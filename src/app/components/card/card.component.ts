import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  cards = [
    {
      url: "../../assets/card/github-projects.png",
      alt: "",
      projectName: "Nome do projeto",
      projectDescription:
        "Um projeto feito com React, consumindo API do Github, mostrando todos os meus projetos públicos ",
    },
  ];

  isActive = 'true';

  constructor() {}

  ngOnInit(): void {}
}
