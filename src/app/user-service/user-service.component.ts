import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css'],
})
export class UserServiceComponent implements OnInit {
    title: string;
    constructor(private http: HttpClient){ }

    ngOnInit(): void {
        this.http.get('/var/www/html/users/file.json').subscribe(data => {
          console.log(data);
        });
    }
}
