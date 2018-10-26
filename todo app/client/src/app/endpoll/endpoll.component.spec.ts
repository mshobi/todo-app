import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpollComponent } from './endpoll.component';

describe('EndpollComponent', () => {
  let component: EndpollComponent;
  let fixture: ComponentFixture<EndpollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
