import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminlistComponent } from './admin-adminlist.component';

describe('AdminAdminlistComponent', () => {
  let component: AdminAdminlistComponent;
  let fixture: ComponentFixture<AdminAdminlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAdminlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAdminlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
