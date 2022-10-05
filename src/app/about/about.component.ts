import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  assets = {
    images: {
      avatar: {
        url: "../../assets/about/image.svg"
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
