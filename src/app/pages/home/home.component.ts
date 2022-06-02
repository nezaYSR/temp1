import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services';
import {Role, User} from '../../models';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  currentUser: User;
  loading = false;
  userRole = localStorage.getItem('userRole')

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.currentUser
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((x) => (this.currentUser = x));
  }

  ngOnInit(): void {
    if (this.isSuperUser) {
      this.router.navigate(['/superuser/home']);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  get isSuperUser() {
    return this.userRole === 'super_user';
  }
}
