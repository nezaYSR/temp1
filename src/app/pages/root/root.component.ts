import { Component, OnInit } from '@angular/core';
import { Role } from '../../models';
import { Router } from '@angular/router';
import {AuthenticationService, UserService} from "../../shared/services";

@Component({
  selector: 'app-home',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let userRole = this.userService.userRoleValue
    if (this.isSuperUser(userRole)) {
      this.router.navigate(['/superuser/home']);
    } else if (this.isRiskAdmin(userRole)) {
      this.router.navigate(['/riskadmin/home']);
    } else if (this.isSuperVisorAdmin(userRole)) {
      this.router.navigate(['/supervisor/home']);
    }else{
      this.authenticationService.logout()
      this.router.navigate(['/auth/login'])
    }
  }

  isSuperUser(role: string | null): boolean {
    return role === Role.SUPER_USER;
  }

  isSuperVisorAdmin(role: string | null): boolean {
    return role === Role.SUPERVISOR_ADMIN;
  }

  isRiskAdmin(role: string | null): boolean {
    return role === Role.RISK_ADMIN;
  }
}
