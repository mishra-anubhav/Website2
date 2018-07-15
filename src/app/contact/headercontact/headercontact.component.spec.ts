import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercontactComponent } from './headercontact.component';

describe('HeadercontactComponent', () => {
  let component: HeadercontactComponent;
  let fixture: ComponentFixture<HeadercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
