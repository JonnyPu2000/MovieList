import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register-acess',
  templateUrl: './register-acess.component.html',
  styleUrls: ['./register-acess.component.css']
})
export class RegisterAcessComponent implements OnInit {

  @Output() onRegister: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  register() {
    this.onRegister.emit();
  }
}
