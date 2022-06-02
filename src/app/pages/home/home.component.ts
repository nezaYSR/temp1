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
export class HomeComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  currentUser: User;
  loading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    console.log('ngOnInit Home')
    let userRole = localStorage.getItem('userRole')
    if (this.isSuperUser(userRole)) {
      console.log('isSuperUser evaluated');
      this.router.navigate(['/superuser/home']);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  isSuperUser(role: string|null): boolean {
    console.log(role)
    console.log(Role.SUPER_USER)
    console.log('isSuperUser done')
    return role === Role.SUPER_USER;
  }
}
