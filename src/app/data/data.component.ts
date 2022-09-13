import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  providers: [DataService],
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  data$: Observable<number>;

  constructor(private readonly data: DataService) {}

  ngOnInit() {
    this.data$ = this.data.buffer$;
  }
}
