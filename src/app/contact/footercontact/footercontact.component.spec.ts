import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercontactComponent } from './footercontact.component';

describe('FootercontactComponent', () => {
  let component: FootercontactComponent;
  let fixture: ComponentFixture<FootercontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootercontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
