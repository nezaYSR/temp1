import {Component} from '@angular/core';
import {User} from "./models";
import {Router} from "@angular/router";
import {AuthenticationService} from "./shared/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x)
  }

}
