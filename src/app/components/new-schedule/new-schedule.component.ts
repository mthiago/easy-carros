import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss']
})
export class NewScheduleComponent implements OnInit {

  @ViewChild('service') inputService: ElementRef;
  @ViewChild('scheduled') inputScheduled: ElementRef;
  @ViewChild('board') inputBoard: ElementRef;
  @Output() listChanged = new EventEmitter();
  schedule: any;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  addSchedule(event) {
    let schedule = {
      "service": event.target.service.value,
      "scheduled": event.target.scheduled.value,
      "board": event.target.board.value
    };
    if (schedule.scheduled == '') {
      let date = new Date();
      schedule.scheduled = this.datePipe.transform(date, 'dd/MM/yyyy');
    }
    this.listChanged.emit(schedule);
    this.clearForm();
  }

  clearForm() {
    this.inputService.nativeElement.value = '';
    this.inputScheduled.nativeElement.value = '';
    this.inputBoard.nativeElement.value = '';
  }

}
