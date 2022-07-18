import { Component } from '@angular/core';

@Component({
  /* selector: 'appComponent', */
  /* selector: '.appcomponent', */
  selector: '#appcomponent',
  /* templateUrl: './app.component.html', */
  template: `<app-header></app-header>
  <p>Front-End Bootcamp with Angular - 18.07.2022</p>
  {{ title }} {{ getCount() }} öğrenci bootcamp eğitimine katıldı
  {{ getStudentCount() }}
  <br>
  <!--  
  <table>
    <tr>
      <td>
      {{todoItem.description}}
      </td>,
      <td>
      {{todoItem.action}}
      </td>
      <td>
      {{todoItem.count}}
      </td>
    </tr>
  </table>-->

  <table>
    <tr>
      <th>description</th>
      <th>action</th>
      <th>count</th>
    </tr>
    <tr>
      <td>{{todoItem.description}}</td>
      <td>{{todoItem.action}}</td>
      <td>{{todoItem.count}}</td>
    </tr>
  </table>
  <app-footer></app-footer>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`h2 {color: red} table, th, td { border:1px solid black; }`]
})
export class AppComponent {
  /* TeachCareer 15 öğrenci bootcamp eğitimine katıldı */
  titlee = 'TeachCareer';
  private count = 15;

  title = `TeachCareer ${this.count} öğrenci bootcamp eğitimine katıldı`;

  todoItem = {
    description: 'front-end bootcamp',
    action: true,
    count: 15
  }

  getStudentCount() {
    return this.titlee + ' ' + this.count + 'öğrenci bootcamp eğitimine katıldı';
  }

  getCount() {
    return this.count;
  }
}
