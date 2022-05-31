import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/services";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false
  userDetail: any = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUserDetail().subscribe({
      next: value => {
        console.log(value)
        this.userDetail = value
      },
      error: err => {
        console.log(err)
      },
      complete: () => {
        this.loading = false
        console.log('request completed')
      }
    })
  }

}
