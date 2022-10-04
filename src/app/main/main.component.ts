import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = {
    small: "João Victor",
    big: "Ambrozi"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
