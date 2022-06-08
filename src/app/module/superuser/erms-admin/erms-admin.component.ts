import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {debounceTime, distinctUntilChanged, first, map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {componentDestroyed, OnDestroyMixin} from "@w11k/ngx-componentdestroyed";

@Component({
  selector: 'app-erms-admin',
  templateUrl: './erms-admin.component.html',
  styleUrls: ['./erms-admin.component.scss']
})
export class ErmsAdminComponent extends OnDestroyMixin implements OnInit {
  private searchTermSubject = new Subject<string>()
  private inputListener = this.searchTermSubject.pipe(
    debounceTime(500),
    distinctUntilChanged()
  );
  userList = []
  clickedUserData: any
  selectedRoleOption = ''

  breadcrumbs: {
    title: string
    fullPath: string
  }[] = [
    {
      title: "Home",
      fullPath: "/superuser/home"
    },
    {
      title: "ERMS Admin",
      fullPath: "/superuser/ErmsAdmin"
    }
  ]

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {
    this.getUserList()

    this.inputListener
      .pipe(takeUntil(componentDestroyed(this)))
      .subscribe(currentValue => {
      if(currentValue === ''){
        this.getUserList()
      }else{
        this.http.get<any>(`${environment.apiUrl}/riskadm/finduser`, {
          params:{
            // TODO: sesuaikan lagi dengan Backend
            term: currentValue
          }
        })
          .pipe(first())
          .pipe(
            map((resp) => {
              if (resp) {
                return resp.userFound
              }
            })
          )
          .subscribe({
            next: resp => {
              this.userList = resp
            }
          })
      }
    });
  }

  getUserList() {
    return this.http.get<any>(`${environment.apiUrl}/superuser/userlist`)
      .pipe(first())
      .pipe(
        map((resp) => {
          if (resp) {
            return resp.userList
          }
        })
      )
      .subscribe({
        next: resp => {
          this.userList = resp
        }
      })
  }

  getInputValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  doSearchUser(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }

  tableRowListener(userData: any) {
    this.clickedUserData = userData
    this.selectedRoleOption = userData['nik']
  }

  ermsRoleSelectListener(){
    console.log(this.selectedRoleOption)
  }

  doAssignErmsRole() {
    this.http.patch(`${environment.apiUrl}/superuser/assignsupervisoradmin`, {
      "_userId": this.clickedUserData['_id'],
      "ermsRole": this.selectedRoleOption
    })
      .pipe(first())
      .subscribe({
        next: value => {
          // TODO: handle sukses & error
          console.log(value)
        },
        error: err => {
          console.log(err)
        }
      })
  }

}
