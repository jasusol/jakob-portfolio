import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammerInfoComponent } from './programmer-info.component';

describe('ProgrammerInfoComponent', () => {
  let component: ProgrammerInfoComponent;
  let fixture: ComponentFixture<ProgrammerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
