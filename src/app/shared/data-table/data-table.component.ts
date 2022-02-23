import { Component, Input, OnInit } from '@angular/core';
import { RegisteredUser, UnregisteredUser } from 'src/app/models/users';

@Component({
  selector: 'ds-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() datasource: any;
  @Input() columns: Array<string> = [];
  @Input() headers: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
