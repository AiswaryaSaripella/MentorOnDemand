import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenttrainingsComponent } from './currenttrainings.component';

describe('CurrenttrainingsComponent', () => {
  let component: CurrenttrainingsComponent;
  let fixture: ComponentFixture<CurrenttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
