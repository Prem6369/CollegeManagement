import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddadminComponent } from './admin-addadmin.component';

describe('AdminAddadminComponent', () => {
  let component: AdminAddadminComponent;
  let fixture: ComponentFixture<AdminAddadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAddadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAddadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
