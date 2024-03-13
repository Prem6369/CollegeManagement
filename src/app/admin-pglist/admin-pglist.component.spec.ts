import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPglistComponent } from './admin-pglist.component';

describe('AdminPglistComponent', () => {
  let component: AdminPglistComponent;
  let fixture: ComponentFixture<AdminPglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
