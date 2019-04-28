import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-update',
  templateUrl: './date-update.component.html',
  styleUrls: ['./date-update.component.scss']
})
export class DateUpdateComponent implements OnInit {

  @Input() date: string;
  constructor() { }

  ngOnInit() {
  }

}
