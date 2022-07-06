import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Person } from '../person';
import { Router } from '@angular/router';
declare const slide_popup: any;
declare const slide_close: any;
declare const slide_close1: any;
declare const slide_popup2:any;

class DataTablesResponse {
  data: any[] =[];
  draw: any;
  recordsFiltered: any;
  recordsTotal: any;
}

@Component({
  selector: 'app-viewsign',
  templateUrl: './viewsign.component.html',
  styleUrls: ['./viewsign.component.css']
})
export class ViewsignComponent implements OnInit {

  @ViewChild('iframe') iframe: ElementRef<any> 
  @ViewChild('iframe2') iframe2: ElementRef<any> 

  
  title = 'datatable';
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  public show = false
  public show1 = false

  constructor(private http: HttpClient ,private router:Router) {}

  slide_popu(e:any){     
    // this.show = true
    // this.show1 = false
    console.log("slide_popu",e)
    slide_popup(e);
  }
  slide_pop2(e:any){ 
    // this.show1 = true
    // this.show = false
    console.log("slide_pop2",e)
      slide_popup2(e)
  }
  onclosemember(ev:any){
    console.log("onclosemember",ev);
    // slide_close(ev)
    this.router.navigate(['/login'])
  }
  oncloseregistration(ev:any){
    console.log("oncloseregistration",ev)
    slide_close1(ev)
  }
  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
      var t="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTUzNzcxNTMyNSwiZXhwIjoxNTM3NzE4OTI1LCJuYmYiOjE1Mzc3MTUzMjUsImp0aSI6IlBKWVhnSkVyblQ0WjdLTDAiLCJzdWIiOjYsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.1vz5lwPlg6orzkBJijsbBNZrnFnUedsGJUs7BUs0tmM";
      var headers_object = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ t
      });
      const httpOptions = {
        obj:{},
        headers: headers_object
      };
      that.http.post<DataTablesResponse>('https://angular-datatables-demo-server.herokuapp.com/', dataTablesParameters, httpOptions
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
