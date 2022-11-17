import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { EmitterRouteService } from "src/app/services/emitter-route.service";
import { SaveOnLocalStorageService } from "src/app/services/save-on-local-storage.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  dados: any = [];

  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('email') emailInput!: ElementRef;
  @ViewChild('message') messageInput!: ElementRef;

  constructor(
    private httpClient: HttpClient,
    private routeEmitter: EmitterRouteService,
    private storage: SaveOnLocalStorageService
  ) {}

  ngOnInit(): void {
    this.routeEmitter.router.emit("contato");
  }

  onSubmit(form: any) {
    const { value } = form;

    this.nameInput.nativeElement.value = "";
    this.emailInput.nativeElement.value = "";
    this.messageInput.nativeElement.value = "";
    
    this.dados.push(value);
    this.storage.set("contato", this.dados);

    // this.httpClient
    //   .post("localhost:3306/cadastros", JSON.stringify(value))
    //   .subscribe((dados) => console.log(dados));
  }
}
