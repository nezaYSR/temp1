import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erms-admin',
  templateUrl: './erms-admin.component.html',
  styleUrls: ['./erms-admin.component.scss']
})
export class ErmsAdminComponent implements OnInit {

  breadcrumbs: {
    title: string
    fullPath: string
  }[] = [
    {
      title: "Home",
      fullPath: "/superuser/home"
    },
    {
      title: "ERMS Admin",
      fullPath: "/superuser/ErmsAdmin"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
