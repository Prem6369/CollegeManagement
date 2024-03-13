import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPccourseComponent } from './add-pccourse.component';

describe('AddPccourseComponent', () => {
  let component: AddPccourseComponent;
  let fixture: ComponentFixture<AddPccourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPccourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPccourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
