import {Component, OnInit} from '@angular/core';
import {ResponsesService} from "../../services/responses-service";

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  public user = "JohnDoe@gmail.com";
  public numOfFields: number[] = [1, 2, 3, 4];
  public numOfResponses: number[] = [1, 2, 3, 4, 5, 6];
  page = 1;
  pageSize = 10;

  constructor(private service: ResponsesService) {
  }

  ngOnInit(): void {
  }

  // responses() {
  //   this.service.responses().subscribe(data => {
  //     console.log(data);
  //   })
  // }


  // responses() {
  //   this.mockService.responses().subscribe(data => {
  //     console.log(data);
  //   })
  // }

}
