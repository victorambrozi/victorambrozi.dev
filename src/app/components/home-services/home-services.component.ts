import { Component, OnInit } from '@angular/core';
import { EmitterRouteService } from 'src/app/services/emitter-route.service';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.css']
})
export class HomeServicesComponent implements OnInit {

  services = [
    { 
      image: "../../../assets/services/computer 1.svg", 
      description: "Manutenção de microcomputadores",
      alt: "Manutenção de microcomputadores"
    },
    { 
      image: "../../../assets/services/computer 1.svg", 
      description: "Manutenção em notebooks",
      alt: "Manutenção em notebooks"
    },
    { 
      image: "../../../assets/services/computer 1.svg", 
      description: "Formatação",
      alt: "Formatação"
    }, { 
      image: "../../../assets/services/computer 1.svg", 
      description: "Upgrades",
      alt: "Upgrades"
    }, { 
      image: "../../../assets/services/code-solid 1.svg", 
      description: "Desenvolvimento de sites",
      alt: "Desenvolvimento de sites"
    }, { 
      image: "../../../assets/services/code-solid 1.svg", 
      description: "Design responsivo",
      alt: "Design responsivo"
    },
  ]
  constructor(private routeEmitter: EmitterRouteService) { }

  ngOnInit(): void {
    this.routeEmitter.router.emit("serviços")
  }

}
