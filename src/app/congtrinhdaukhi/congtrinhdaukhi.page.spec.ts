import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongtrinhdaukhiPage } from './congtrinhdaukhi.page';

describe('CongtrinhdaukhiPage', () => {
  let component: CongtrinhdaukhiPage;
  let fixture: ComponentFixture<CongtrinhdaukhiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongtrinhdaukhiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongtrinhdaukhiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
