import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditugComponent } from './admin-editug.component';

describe('AdminEditugComponent', () => {
  let component: AdminEditugComponent;
  let fixture: ComponentFixture<AdminEditugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEditugComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEditugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
