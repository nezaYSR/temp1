import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from 'rxjs/operators'

import {environment} from "../../../environments/environment";
import {User} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(nik: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/userauth`,
      {
        nik, password
      },
      {
        withCredentials: true
      }).pipe(map(resp => {
      if (resp && resp.success === true) {
        localStorage.setItem('currentUser', JSON.stringify(resp.ldapAuth));
        this.currentUserSubject.next(resp.ldapAuth)
      }

      return resp
    }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User());
  }
}
