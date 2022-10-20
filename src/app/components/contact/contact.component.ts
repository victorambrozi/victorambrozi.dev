import { Component, Input, OnInit } from '@angular/core';
import { SaveOnLocalStorageService } from 'src/app/save-on-local-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private storage: SaveOnLocalStorageService) { }
  contatos: object[] = [];

  ngOnInit(): void {
  }

  saveLocalStorage() {
    this.storage.set("dados", JSON.stringify(this.contatos));
  }

  onSubmit(form: any) {
    const { value } = form;
    
    this.contatos.push(value);
    this.saveLocalStorage();
  }


  


}
