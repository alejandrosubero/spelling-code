import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapsTextsComponent } from './taps-texts.component';

describe('TapsTextsComponent', () => {
  let component: TapsTextsComponent;
  let fixture: ComponentFixture<TapsTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapsTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapsTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
