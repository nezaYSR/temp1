import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  breadcrumbs: {
    title: string
    fullPath: string
  }[] = [
    {
      title: "Home",
      fullPath: "/riskadmin/home"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
