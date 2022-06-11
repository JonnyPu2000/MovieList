import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAvatarDialog } from './change-avatar.component';

describe('ChangeAvatarComponent', () => {
  let component: ChangeAvatarDialog;
  let fixture: ComponentFixture<ChangeAvatarDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAvatarDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeAvatarDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
