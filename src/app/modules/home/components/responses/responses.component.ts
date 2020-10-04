import {Component, Input, OnInit} from '@angular/core';
import {ResponsesService} from "../../services/responses-service";
import {Field} from "../../../../model/Field";
import {Worksheet} from "../../../../model/Worksheet";

declare var SockJS;
declare var Stomp;

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {

  page = 1;
  pageSize = 10;
  public arrOfFields: Field[] = [];
  public arrOfAnswers: Worksheet[] = [];
  public newWorksheet: Worksheet;
  @Input() fieldId;
  public arrOfWorksheets: Worksheet[] = [];

  constructor(private service: ResponsesService) {
    this.arrOfWorksheets = [];
    this.initializeWebSocketConnection();
  }

  ngOnInit(): void {
    this.findAllFields();
    this.responses();
  }

  public stompClient;

  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8087/ws';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/topic/response', (message) => {
        that.newWorksheet = JSON.parse(message.body);
        that.arrOfWorksheets.push(that.newWorksheet);
      });
    });
  }

  findAllFields() {
    this.service.findAllFields().subscribe((fields: Field[]) => {
      this.arrOfFields = fields;
    })
  }

  responses() {
    this.service.responses().subscribe((data: Worksheet[]) => {
      if (data) {
        this.arrOfWorksheets = data;
      }
    })
  }

  getAnswer(worksheet: Worksheet) {
    const temp = this.arrOfWorksheets.find(el => {
      return el.worksheetId === worksheet.worksheetId;
    })
    return temp.answerDTOS;
  }

}
