import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headlines } from './headlines';

describe('Headlines', () => {
  let component: Headlines;
  let fixture: ComponentFixture<Headlines>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headlines]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headlines);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
