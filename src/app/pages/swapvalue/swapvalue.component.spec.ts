import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapvalueComponent } from './swapvalue.component';

describe('SwapvalueComponent', () => {
  let component: SwapvalueComponent;
  let fixture: ComponentFixture<SwapvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
