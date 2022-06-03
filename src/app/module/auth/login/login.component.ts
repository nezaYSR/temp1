import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService, UserService } from '../../../shared/services';
import {Role} from "../../../models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  currentUserRole = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nik: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .login(this.f['nik'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: (value) => {

          this.userService.getUserDetail()
            .pipe(first())
            .subscribe({
              next: userDetailResp => {
                this.currentUserRole = userDetailResp.userERMSrole.ermsRole

                switch (this.currentUserRole){
                  case Role.SUPER_USER:
                    this.router.navigate(['superuser/home']);
                    break
                  case Role.SUPERVISOR_ADMIN:
                    this.router.navigate(['supervisor/home']);
                    break
                  case Role.RISK_ADMIN:
                    this.router.navigate(['riskadmin/home']);
                    break
                  default:
                    this.authenticationService.logout()
                    this.error = "access not granted yet"
                    this.loading = false
                }
              },
              error: userDetailErr => {
                console.log(userDetailErr)
              }
            })

        },
        error: (err) => {
          this.error = err.error.message;
          this.loading = false;
        },
      });
  }
}
