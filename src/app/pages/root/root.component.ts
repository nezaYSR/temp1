import { Component, OnInit } from '@angular/core';
import { Role } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit {
  loading = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    console.log(userRole)
    if (this.isSuperUser(userRole)) {
      console.log('1')
      this.router.navigate(['/superuser/home']);
    } else if (this.isRiskAdmin(userRole)) {
      console.log('2')
      this.router.navigate(['/riskadmin/home']);
    } else if (this.isSuperVisorAdmin(userRole)) {
      console.log('3')
      this.router.navigate(['/supervisor/home']);
    }else{
      console.log('else evaluated')
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
