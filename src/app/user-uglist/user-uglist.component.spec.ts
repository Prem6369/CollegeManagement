import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUglistComponent } from './user-uglist.component';

describe('UserUglistComponent', () => {
  let component: UserUglistComponent;
  let fixture: ComponentFixture<UserUglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserUglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserUglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
