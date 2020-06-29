import {Component, OnInit} from '@angular/core';
import {ResponsesService} from "../../services/responses-service";
import {ResponsesMockService} from "../../mock-services/responses-mock-service";

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  constructor(private service: ResponsesService,
              private mockService: ResponsesMockService) {
  }

  ngOnInit(): void {
  }

  // responses() {
  //   this.service.responses().subscribe(data => {
  //     console.log(data);
  //   })
  // }

  responses() {
    this.mockService.responses().subscribe(data => {
      console.log(data);
    })
  }

}
