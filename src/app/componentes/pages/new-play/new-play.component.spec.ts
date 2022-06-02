import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayComponent } from './new-play.component';

describe('NewPlayComponent', () => {
  let component: NewPlayComponent;
  let fixture: ComponentFixture<NewPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
