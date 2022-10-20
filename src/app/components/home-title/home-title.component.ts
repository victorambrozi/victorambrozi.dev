import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.css']
})
export class HomeTitleComponent implements OnInit {
  title = {
    small: "João Victor",
    big: "Ambrozi"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
