import { Component, OnInit } from '@angular/core';
import { EmitterRouteService } from 'src/app/services/emitter-route.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  assets = {
    images: {
      avatar: {
        url: "../../assets/about/image.svg"
      }
    }
  }

  constructor(private routeEmitter: EmitterRouteService) { }

  ngOnInit(): void {
    this.routeEmitter.router.emit("sobre")
  }

}
