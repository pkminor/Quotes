import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBodyComponent } from './quote-body.component';

describe('QuoteBodyComponent', () => {
  let component: QuoteBodyComponent;
  let fixture: ComponentFixture<QuoteBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
