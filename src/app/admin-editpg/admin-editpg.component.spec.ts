import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditpgComponent } from './admin-editpg.component';

describe('AdminEditpgComponent', () => {
  let component: AdminEditpgComponent;
  let fixture: ComponentFixture<AdminEditpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditpgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
