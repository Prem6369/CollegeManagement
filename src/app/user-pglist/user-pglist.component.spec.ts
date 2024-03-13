import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPglistComponent } from './user-pglist.component';

describe('UserPglistComponent', () => {
  let component: UserPglistComponent;
  let fixture: ComponentFixture<UserPglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserPglistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
