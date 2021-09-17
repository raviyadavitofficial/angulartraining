import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonmeComponent } from './honme.component';

describe('HonmeComponent', () => {
  let component: HonmeComponent;
  let fixture: ComponentFixture<HonmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
