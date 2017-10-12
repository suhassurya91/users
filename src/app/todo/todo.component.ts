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
    <!-- CODE TO SHOW TODO LISTS-->
    ngOnInit(): void {
        this.http.get('http://jsonplaceholder.typicode.com/todos?users=1')
        .subscribe(res => this.localVar1 = console.log(res));
        console.log(this.localVar1);
    }

    <!-- CODE TO DELETE TODO LISTS-->
<!--    deleteTodoById(id: number): this.http.get('http://jsonplaceholder.typicode.com/todos?users=1') {
        this.localVar1 = this.localVar1
          .filter(localVar1 => localVar1.id !== id);
        return this;
    }-->

}
