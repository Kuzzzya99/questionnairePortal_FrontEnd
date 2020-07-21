import {Component, OnInit} from '@angular/core';
import {ChangePasswordService} from '../../services/change-password-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private service: ChangePasswordService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)]),
      NewPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  changePassword() {
    this.service.changePassword(this.formGroup.value.Password,
      this.formGroup.value.NewPassword) .subscribe(data =>
        console.log(data),
      error => {
        alert("Wrong password")
      },
      () => this.router.navigate(['../auth']))
  }
}
