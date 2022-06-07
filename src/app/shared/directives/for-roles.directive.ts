import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from "../services";

@Directive({
  selector: '[forRoles]'
})
export class ForRolesDirective {

  roles: string[]

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private userService: UserService
  ) { }

  @Input()
  set forRoles(roles: string[] | string) {
    if (roles != null) {
      this.roles = Array.isArray(roles) ? roles : [roles];
      this.roles = this.roles.map((r) => r.toUpperCase());
    } else {
      this.roles = [];
    }

    const userRole = this.userService.userRoleValue

    if (userRole && !this.roles.includes(userRole.toUpperCase())) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }

  }

}
