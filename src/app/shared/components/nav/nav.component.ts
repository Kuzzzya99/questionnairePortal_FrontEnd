import {Component, Input, OnInit} from '@angular/core';
import {NavService} from "../../services/nav-service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public user;
  @Input() signIn: boolean;

  constructor(private service: NavService) {
  }

  ngOnInit(): void {

  }

  getUsername(){
    this.service.getUsername().subscribe(
      data =>
        this.user = data)
  }
}
