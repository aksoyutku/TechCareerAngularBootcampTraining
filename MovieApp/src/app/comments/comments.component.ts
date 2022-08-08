import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IComments } from '../Models/IComments';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: IComments[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    var headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJLYW1pbCIsImxhc3ROYW1lIjoiS2FwbGFuIiwidXNlcm5hbWUiOiJra2FwbGFuIn0sImlhdCI6MTY1OTcxNzQzMiwiZXhwIjoxNjU5NzM1NDMyfQ.SUCIPauTA3lF3DrlAapisFkSe5-U3n2IREnEyBvdVhc'
    })

    // this.http.get<IComments[]>("http://localhost:3030/api/categories", { headers }).subscribe(data => {
    //   console.log(data);
    // });

    this.http.get<IComments[]>("http://localhost:3001/comments").subscribe(data => {
      this.comments = data;
    }, err => {
      console.log(err);
    }, () => console.log("comments api çalıştırıldı."));
  }

}
