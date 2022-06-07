import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  getNotification() {
    return this.http.get<any>(`${environment.apiUrl}/notifications`)
      .pipe(
        map((resp) => {
          if (resp && resp.success === true) {
            return resp.seeNotification
          }
        })
      )
  }
}
