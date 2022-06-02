import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {first, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserDetail() {
    return this.http.get<any>(`${environment.apiUrl}/myuserdetail`)
      .pipe(
        map((resp) => {
          if (resp && resp.success === true) {
            localStorage.setItem('userRole', resp.userERMSrole.ermsRole);
          }

          return resp;
        })
      )
  }
}
