import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CookieService} from "ngx-cookie-service";
import {AccessService} from "../../services/access-service";
import {AccessModel} from "../../../../model/AccessModel";

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {
  // formGroup: FormGroup;
  @Input() allUsers: AccessModel[];
  @Input() fileId: number;
  // private comment: CommentModel;
  private checkboxValues: string[] = [];

  constructor(private modalService: NgbModal,
              private service: AccessService,
              private cookieService: CookieService) {
  }

  ngOnInit(): void {
    // this.formGroup = new FormGroup({
    //   Comment: new FormControl('', [Validators.required
    //   ])
    // });
  }

  open(content) {
    this.modalService.open(content);
  }

  getCheckboxAnswer() {
    // this.checkboxValues = [];
    this.allUsers.forEach(el => {
      var radios = document.getElementsByName(el.firstName);
      for (let i = 0; i < radios.length; i++) {
        //@ts-ignore
        if (radios[i].checked) {
          //@ts-ignore
          this.checkboxValues.push(radios[i].value);
        }
      }
      //@ts-ignore
    })
  }

  sendNewAccess() {
    this.getCheckboxAnswer();
    console.log(this.checkboxValues);
    this.service.sendNewAccess(this.checkboxValues, this.fileId).subscribe((data) => {
    })
    this.checkboxValues = [];
  }
}
