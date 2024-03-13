import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPclistComponent } from './admin-pclist.component';

describe('AdminPclistComponent', () => {
  let component: AdminPclistComponent;
  let fixture: ComponentFixture<AdminPclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminPclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminPclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
