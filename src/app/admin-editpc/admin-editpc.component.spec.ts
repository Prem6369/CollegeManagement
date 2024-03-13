import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpcComponent } from './admin-editpc.component';

describe('AdminEditpcComponent', () => {
  let component: AdminEditpcComponent;
  let fixture: ComponentFixture<AdminEditpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
