import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarData = [
    {
      "title": "ERMS Admin",
      "fullPath": "/superuser/ErmsAdmin",
      "icon": "fas fa-user-friends",
      "roles": [
        "super_user"
      ],
      "child": []
    },
    {
      "title": "Risk Admin Task",
      "fullPath": "/superuser/RiskAdminTask",
      "icon": "fas fa-user-cog",
      "roles": [
        "super_user"
      ],
      "child": [
        {
          "title": "Task",
          "fullPath": "/superuser/home",
          "icon": "far fa-circle",
          "roles": [
            "super_user"
          ]
        }
      ]
    },
    {
      "title": "User Admin Task",
      "fullPath": "/superuser/UserAdminTask",
      "icon": "fas fa-user-shield",
      "roles": [
        "super_user"
      ],
      "child": [
        {
          "title": "Task",
          "fullPath": "/superuser/home",
          "icon": "far fa-circle",
          "roles": [
            "super_user"
          ]
        }
      ]
    },
    {
      "title": "Activities Log",
      "fullPath": "/erms/ActivitiesLog",
      "icon": "fas fa-scroll",
      "roles": [
        "super_user"
      ],
      "child": []
    },
    {
      "title": "Submit Log",
      "fullPath": "/erms/SubmitLog",
      "icon": "fas fa-file",
      "roles": [
        "super_user"
      ],
      "child": []
    }
  ]

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.doLogoutAndRedirectToLogin()
  }

}
