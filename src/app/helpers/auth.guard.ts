import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService, UserService} from "../shared/services";
import {Role} from "../models";

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
        switch (this.currentUserRole){
          case Role.SUPER_USER:
            this.router.navigate(['superuser/home']);
            break
          case Role.SUPERVISOR_ADMIN:
            this.router.navigate(['supervisor/home']);
            break
        }

        return false
      }
      return true
    }

    this.router.navigate(['/auth/login'])
    return false
  }

}
