import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
    
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})

export class AppComponent {
  title = 'app';
  localVar : any;
    constructor(private http: HttpClient, private router: Router){ }
      ngOnInit(): void {
        this.http.get('http://jsonplaceholder.typicode.com/users')
        .subscribe(res => this.localVar = res);
    }
    viewTodo(pagename: string, id: number) {
        alert("IN View");
        this.router.navigate(['/'+pagename+'/'+id]);
    }
}
