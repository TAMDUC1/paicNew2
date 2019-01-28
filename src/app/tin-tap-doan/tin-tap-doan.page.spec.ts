import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinTapDoanPage } from './tin-tap-doan.page';

describe('TinTapDoanPage', () => {
  let component: TinTapDoanPage;
  let fixture: ComponentFixture<TinTapDoanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinTapDoanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinTapDoanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
