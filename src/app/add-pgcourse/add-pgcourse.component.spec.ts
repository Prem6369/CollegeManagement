import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPgcourseComponent } from './add-pgcourse.component';

describe('AddPgcourseComponent', () => {
  let component: AddPgcourseComponent;
  let fixture: ComponentFixture<AddPgcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPgcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPgcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
