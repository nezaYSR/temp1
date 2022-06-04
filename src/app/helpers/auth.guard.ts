import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService, UserService} from "../shared/services";
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue
    const userRole = this.userService.userRoleValue

    if (currentUser) {
      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        this.router.navigate(['/'])
        return false
      }
      return true
    }

    this.router.navigate(['/auth/login'])
    return false
  }

}
