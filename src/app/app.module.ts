import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
       {
          path:'',
          redirectTo:'app',
          pathMatch:'full',
       },
       {
          path:'todo/:number',
          component:TodoComponent
       },
       {
          path:'todo',
          component:TodoComponent
       }
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
