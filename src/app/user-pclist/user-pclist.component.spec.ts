import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPclistComponent } from './user-pclist.component';

describe('UserPclistComponent', () => {
  let component: UserPclistComponent;
  let fixture: ComponentFixture<UserPclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
