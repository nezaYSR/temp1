import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService, UserService} from "../shared/services";
import {first, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUserRole: null

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

    if (currentUser) {

      this.userService.getUserDetail()
        .pipe(first())
        .pipe(
          map((resp) => {
            console.log('pipe')
            if (resp && resp.success === true) {
              this.currentUserRole = resp.userERMSrole.ermsRole
            }
            return resp;
          })
        )
        .subscribe({
          next: () => {
            console.log('subs')
          },
          error: () => {
            this.router.navigate(['/'])
            return false
          }
      })

      if (route.data['roles'] && route.data['roles'].indexOf(this.currentUserRole) === -1) {
        console.log('evaluated')
        this.router.navigate(['/'])
        return false
      }
      console.log('not evaluated')

      return true
    }

    this.router.navigate(['/auth/login'])
    return false
  }

}
