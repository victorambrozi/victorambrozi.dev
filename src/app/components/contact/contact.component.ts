import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { SaveOnLocalStorageService } from "src/app/save-on-local-storage.service";
import { map } from "rxjs";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  dados: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: any) {
    const { value } = form;

    console.log(value);
    this.httpClient.post("endereco/formValue", JSON.stringify(value))
      .subscribe(dados => console.log(dados))
  }
}
