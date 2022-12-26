import { Component, Input, OnInit } from '@angular/core';
import { EmitterRouteService } from 'src/app/services/emitter-route.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
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
