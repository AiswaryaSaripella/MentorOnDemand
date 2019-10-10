import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantdataComponent } from './constantdata.component';

describe('ConstantdataComponent', () => {
  let component: ConstantdataComponent;
  let fixture: ComponentFixture<ConstantdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
