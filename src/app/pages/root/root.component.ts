import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services';
import {Role, User} from '../../models';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  loading = false;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole')
    if (this.isSuperUser(userRole)) {
      this.router.navigate(['/superuser/home']);
    }else if (this.isSuperVisorAdmin(userRole)){
      this.router.navigate(['/supervisor/home']);
    }
  }

  isSuperUser(role: string|null): boolean {
    return role === Role.SUPER_USER;
  }

  isSuperVisorAdmin(role: string|null): boolean {
    return role === Role.SUPERVISOR_ADMIN
  }
}
