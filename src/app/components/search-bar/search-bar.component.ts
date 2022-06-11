import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, pipe } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  filter: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.filter.valueChanges
      .subscribe(res => {
        this.onFilter.emit(res);
      })
  }

}
