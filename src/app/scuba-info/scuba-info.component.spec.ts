import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScubaInfoComponent } from './scuba-info.component';

describe('ScubaInfoComponent', () => {
  let component: ScubaInfoComponent;
  let fixture: ComponentFixture<ScubaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScubaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScubaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
