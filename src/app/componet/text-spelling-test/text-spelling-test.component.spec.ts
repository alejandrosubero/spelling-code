import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpellingTestComponent } from './text-spelling-test.component';

describe('TextSpellingTestComponent', () => {
  let component: TextSpellingTestComponent;
  let fixture: ComponentFixture<TextSpellingTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSpellingTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSpellingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
