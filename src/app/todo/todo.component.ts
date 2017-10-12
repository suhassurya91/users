import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  localVar1 : any;
  constructor(private http: HttpClient){ }
      ngOnInit(): void {
      alert("BC");
        this.http.get('http://jsonplaceholder.typicode.com/todos?users=1')
        .subscribe(res => this.localVar1 = console.log(res));
        console.log(this.localVar1);
        }
}
