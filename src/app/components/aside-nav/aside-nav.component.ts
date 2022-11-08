import { Component, OnInit } from '@angular/core';
import { EmitterRouteService } from 'src/app/emitter-route.service';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {
  page = "";
  constructor(private routeEmitter: EmitterRouteService) { }


  ngOnInit(): void {
    this.routeEmitter.router.subscribe(
      route => this.page = route
    )
  }

}
