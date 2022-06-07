import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {first, map} from "rxjs/operators";

@Component({
  selector: 'app-erms-admin',
  templateUrl: './erms-admin.component.html',
  styleUrls: ['./erms-admin.component.scss']
})
export class ErmsAdminComponent implements OnInit {

  userList = []

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    return this.http.get<any>(`${environment.apiUrl}/superuser/userlist`)
      .pipe(first())
      .pipe(
        map((resp) => {
          if (resp) {
            return resp.userList
          }
        })
      )
      .subscribe({
        next: resp => {
          this.userList = resp
        },
        error: err => {
        }
      })
  }

}
