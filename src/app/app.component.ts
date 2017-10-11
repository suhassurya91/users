import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor(private http: HttpClient){ }
      ngOnInit(): void {
        this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(data => {
        
        let list: string[] = [];
        json.Results.forEach(element => {
            list.push(element.Id);
        });
          console.log(data);
        });    
    }
}
