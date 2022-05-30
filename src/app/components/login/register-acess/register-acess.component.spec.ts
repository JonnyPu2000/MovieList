import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAcessComponent } from './register-acess.component';

describe('RegisterAcessComponent', () => {
  let component: RegisterAcessComponent;
  let fixture: ComponentFixture<RegisterAcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
