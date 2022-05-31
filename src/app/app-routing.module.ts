import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./helpers/auth.guard";
import {Role} from "./models";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/module/auth/auth.module').then(
        (m) => m.AuthModule
      )
  },
  {
    path: 'superuser',
    loadChildren: () =>
      import('../app/module/superuser/superuser.module').then(
        (m) => m.SuperuserModule
      ),
    canActivate: [AuthGuard],
    data: { roles: '232112356' }
    // TODO: ubah nik jadi roles sebagai identifier
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
