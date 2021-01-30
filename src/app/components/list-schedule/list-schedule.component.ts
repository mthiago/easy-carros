import { Component, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.scss']
})
export class ListScheduleComponent implements OnInit {

  schedules: any;

  constructor(private datePipe: DatePipe) {
    this.schedules = [
      {
        "id": 1,
        "service": "Troca de pneu",
        "scheduled": "12/12/2009",
        "board": "IKN-2123"
      },
      {
        "id": 2,
        "service": "Manutenção",
        "executed": "12/12/2009",
        "scheduled": "12/12/2009",
        "board": "ASD-1341"
      },
      {
        "id": 3,
        "service": "Troca de óleo",
        "executed": "02/08/2020",
        "scheduled": "02/08/2020",
        "board": "JHS-9002"
      }
    ];
  }

  ngOnInit(): void { }

  onListChanged(schedule) {
    this.schedules.push(schedule);
  }

  remove(id) {
    this.schedules.splice(this.schedules.filter(s => s.id === id), 1);
  }

  finish(id) {
    let index = this.schedules.findIndex(s => s.id === id);
    let date = new Date();
    this.schedules[index].executed = this.datePipe.transform(date, 'dd/MM/yyyy');
  }

}
