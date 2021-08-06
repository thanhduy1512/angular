import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductExerciseComponent } from './crud-product-exercise.component';

describe('CrudProductExerciseComponent', () => {
  let component: CrudProductExerciseComponent;
  let fixture: ComponentFixture<CrudProductExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProductExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProductExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
