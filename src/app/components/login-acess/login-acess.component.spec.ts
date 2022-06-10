import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAcessComponent } from './login-acess.component';

describe('LoginAcessComponent', () => {
  let component: LoginAcessComponent;
  let fixture: ComponentFixture<LoginAcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
