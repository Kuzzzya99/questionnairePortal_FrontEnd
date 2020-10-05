import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../services/comment-service";
import {Member} from "../../../../model/Member";
import {CommentModel} from "../../../../model/CommentModel";
import {Field} from "../../../../model/Field";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  formGroup: FormGroup;
  @Input() comments: CommentModel[];
  @Input() fileId: number;
  private comment: CommentModel;

  constructor(private modalService: NgbModal,
              private commentService: CommentService,
              private cookieService: CookieService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Comment: new FormControl('', [Validators.required
      ])});
  }

  open(content) {
    this.modalService.open(content);
  }

  sendComment(){
    this.commentService.sendComment(this.cookieService.get("userId"), this.formGroup.value.Comment, this.fileId).subscribe((data) => {
    })
    this.formGroup.value.Comment = '';
  }
}
