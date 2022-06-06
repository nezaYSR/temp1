import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErmsAdminComponent } from './erms-admin.component';

describe('ErmsAdminComponent', () => {
  let component: ErmsAdminComponent;
  let fixture: ComponentFixture<ErmsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErmsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErmsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
