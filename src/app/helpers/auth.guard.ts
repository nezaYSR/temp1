import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService, UserService} from "../shared/services";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUserRole = localStorage.getItem('userRole')

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue

    if (currentUser) {
      if (route.data['roles'] && route.data['roles'].indexOf(this.currentUserRole) === -1) {
        this.router.navigate(['/'])
        return false
      }
      return true
    }

    this.router.navigate(['/auth/login'])
    return false
  }

}
