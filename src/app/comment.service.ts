import { Injectable, OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from './comment-model';


@Injectable({
  providedIn: 'root'
})
export class CommentService implements OnInit{

  comments: Comment[] = [
    {
      comment: "Mister Wilson discretely rid me of my pool problems with ruthless efficiency", name: 'William Fisk'
    },
    {
      comment:'Wades pool cleaning service is the best around! Mister Wilson has helped me out many times', name:'Bob'
    },
  ];

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
  }

}
