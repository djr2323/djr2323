import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChonsoComponent } from './chonso.component';

describe('ChonsoComponent', () => {
  let component: ChonsoComponent;
  let fixture: ComponentFixture<ChonsoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChonsoComponent]
    });
    fixture = TestBed.createComponent(ChonsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
