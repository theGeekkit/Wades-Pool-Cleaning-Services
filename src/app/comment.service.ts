import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from './comment-model';


@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit{

  emptyList = false

  comments: Comment[] = [];

  constructor() {
    this.commentForm = new FormGroup({
      comment: new FormControl(),
      name: new FormControl()
    });
   }

  commentForm!: FormGroup;

  ngOnInit(): void {

  }
  onSubmit() {
    this.comments.push(this.commentForm.value);
    console.log(this.comments)
    this.commentForm.reset()
    this.emptyList = true
  }
}
