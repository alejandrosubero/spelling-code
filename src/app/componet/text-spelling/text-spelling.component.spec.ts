import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpellingComponent } from './text-spelling.component';

describe('TextSpellingComponent', () => {
  let component: TextSpellingComponent;
  let fixture: ComponentFixture<TextSpellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSpellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSpellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
