import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ds-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() datasource: any;
  @Input() columns: any;
  @Input() headers: any;

  constructor() { }

  ngOnInit(): void {}

}
