import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Person } from './person';

class DataTablesResponse {
  data: any[] =[];
  draw: any;
  recordsFiltered: any;
  recordsTotal: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datatable';
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;
            console.log("that.persons",that.persons);
            

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'id' }, { data: 'firstName' }, { data: 'lastName' }]
    };
  }

}
