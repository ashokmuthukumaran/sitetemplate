import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddemoComponent } from './uploaddemo.component';

describe('UploaddemoComponent', () => {
  let component: UploaddemoComponent;
  let fixture: ComponentFixture<UploaddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploaddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
