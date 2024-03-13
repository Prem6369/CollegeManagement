import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUglistComponent } from './admin-uglist.component';

describe('AdminUglistComponent', () => {
  let component: AdminUglistComponent;
  let fixture: ComponentFixture<AdminUglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
