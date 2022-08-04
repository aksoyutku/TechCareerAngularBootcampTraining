import { HttpClient } from '@angular/common/http';
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
    this.http.get<IComments[]>("http://localhost:3001/comments").subscribe(data => {
      this.comments = data;
    });
  }

}
