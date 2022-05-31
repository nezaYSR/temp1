import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthenticationService, UserService} from "../../shared/services";
import {Role, User} from "../../models";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  currentUser: User;
  loading = false
  userDetail: any = []

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser
      .pipe(
        takeUntil(this.ngUnsubscribe)
      ).subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
    if (this.isSuperUser){
      this.router.navigate(['/superuser'])
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }

  get isSuperUser() {
    return this.currentUser && this.currentUser.role === Role.SUPER_USER;
  }

}
