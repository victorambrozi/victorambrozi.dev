import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveOnLocalStorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string): boolean {
    if (this.storage) {
      this.storage.setItem(key, value);
      return true;
    }

    return false;
  }

  get(key: string) {
    if(this.storage){
      return this.storage.getItem(JSON.parse(key))
    }
    return null;
  }


  remove(key: string): boolean {
    if(this.storage) {
      this.storage.removeItem(key)
      return true
    }
    return false;
  }

  clear(): boolean {
    if(this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
