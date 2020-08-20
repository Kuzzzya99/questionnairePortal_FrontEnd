import {Component, Input, OnInit} from '@angular/core';
import {NavService} from '../../services/nav-service';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public user;
  @Input() signIn: boolean;

  constructor(private service: NavService,
              private cookieService: CookieService,
              public router: Router) {
  }

  ngOnInit(): void {
    this.getUsername();
  }

  getUsername() {
    this.service.getUsername().subscribe((data: any) => this.user = data.firstName);
  }

  logOut(){
    this.service.logOut().subscribe((data: any) => this.cookieService.deleteAll(),
      error => {
        alert("Can't logout")
      },
      () => this.router.navigate(['../auth']))
  }

}
