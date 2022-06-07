import { Component, OnInit } from '@angular/core';
import {User} from "../../../models";
import {AuthenticationService} from "../../../shared/services";
import {NotificationService} from "../../../shared/services/notification.service";
import {finalize, first} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  loading = true
  error = ''
  listNotification = []

  breadcrumbs: {
    title: string
    fullPath: string
  }[] = [
    {
      title: "Home",
      fullPath: "/superuser/home"
    }
  ]

  constructor(
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService
  ) {
    this.currentUser = authenticationService.currentUserValue
  }

  ngOnInit(): void {
    this.notificationService.getNotification()
      .pipe(first())
      .pipe(finalize(() => {
        this.loading = false
      }))
      .subscribe({
        next: resp => {
          this.listNotification = resp
        },
        error: err => {
          this.error = err.message
        }
      })
  }

}
