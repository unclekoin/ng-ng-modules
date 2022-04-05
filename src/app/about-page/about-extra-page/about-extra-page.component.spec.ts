import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutExtraPageComponent } from './about-extra-page.component';

describe('AboutExtraPageComponent', () => {
  let component: AboutExtraPageComponent;
  let fixture: ComponentFixture<AboutExtraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutExtraPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutExtraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
