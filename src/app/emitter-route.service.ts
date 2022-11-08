import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterRouteService {

  router = new EventEmitter<string>();
  constructor() { }
}
