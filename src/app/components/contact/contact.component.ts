import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { EmitterRouteService } from "src/app/emitter-route.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  dados: any = [];

  constructor(private httpClient: HttpClient, private routeEmitter: EmitterRouteService) {}

  ngOnInit(): void {
    this.routeEmitter.router.emit("contato")

  }

  onSubmit(form: any) {
    const { value } = form;

    console.log(value);
    this.httpClient.post("endereco/formValue", JSON.stringify(value))
      .subscribe(dados => console.log(dados))
  }
}
