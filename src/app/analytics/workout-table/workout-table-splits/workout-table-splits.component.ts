import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-workout-table-splits',
  templateUrl: './workout-table-splits.component.html',
  styleUrls: ['./workout-table-splits.component.css']
})
export class WorkoutTableSplitsComponent implements OnInit {

  options: FormGroup;

  @Output()
  splitsEmitter: EventEmitter<String> = new EventEmitter<String>();

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [16, Validators.min(10)],
    });
  }

  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }

  ngOnInit() {
  }

  onClickSplits(timeInterval){
    this.splitsEmitter.emit(timeInterval);
  }

}
