import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.css']
})
export class HomeSkillsComponent implements OnInit {

  skills = [
   {
    url: "../../assets/skills/angular1.svg",
    alt: "Ícone Angular",
    name: "Angular"
  },
  {
    url: "../../assets/skills/css3.svg",
    alt: "Ícone CSS",
    name: "CSS3"
  },
  {
    url: "../../assets/skills/database.svg",
    alt: "Ícone Banco de dados",
    name: "MySQL"
  },
  {
    url: "../../assets/skills/git.svg",
    alt: "Ícone Git",
    name: "Git"
  },
  {
    url: "../../assets/skills/html5.svg",
    alt: "Ícone html",
    name: "HTML5"
  },
  {
    url: "../../assets/skills/java.svg",
    alt: "Ícone Java",
    name: "Java"
  },
  {
    url: "../../assets/skills/js.svg",
    alt: "Ícone Javascript",
    name: "Javascript"
  },
  {
    url: "../../assets/skills/ts.svg",
    alt: "Ícone Angular",
    name: "Typescript"
  },
  ]

constructor() { }

ngOnInit(): void {
}

}
