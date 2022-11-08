import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aside-nav',
  templateUrl: './aside-nav.component.html',
  styleUrls: ['./aside-nav.component.css']
})
export class AsideNavComponent implements OnInit {
  page = "skills";
  href = window.location.href;
  constructor(private activateRout: ActivatedRoute) { }


  ngOnInit(): void {
    // console.log(this.message)
  }

}
