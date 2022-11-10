import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommentModel } from './comment-model';


@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit{

  emptyList = false

  comments: Comment[] = [];

  constructor() { }

  commentForm!: FormGroup;

  ngOnInit(): void {
    this.commentForm = new FormGroup({
      comment: new FormControl(null)
    })
  }
  onSubmit() {
    this.comments.push(this.commentForm.value);
    console.log(this.comments)
    this.commentForm.reset()
    this.emptyList = true
  }
}
