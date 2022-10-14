import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PegarIdService {
  private id = new BehaviorSubject<string>('');

  constructor() { }

  getIdSection(sectionId: string) {
    return this.id.next(sectionId);
  }

}
