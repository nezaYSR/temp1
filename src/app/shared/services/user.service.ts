import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {environment} from "../../../environments/environment";
import {first, map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userRoleSubject: BehaviorSubject<any>;
  public userRole: Observable<any>;

  constructor(private http: HttpClient) {
    this.userRoleSubject = new BehaviorSubject<any>(
      localStorage.getItem('userRole')
    )
    this.userRole = this.userRoleSubject.asObservable()
  }

  public get userRoleValue(): any{
    return this.userRoleSubject.value
  }

  getUserDetail() {
    return this.http.get<any>(`${environment.apiUrl}/myuserdetail`)
      .pipe(
        map((resp) => {
          if (resp && resp.success === true) {
            localStorage.setItem('userRole', resp.userERMSrole.ermsRole);
            this.userRoleSubject.next(resp.userERMSrole.ermsRole)
          }

          return resp;
        })
      )
  }
}
