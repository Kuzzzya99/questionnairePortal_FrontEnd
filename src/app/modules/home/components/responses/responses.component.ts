import {Component, Input, OnInit} from '@angular/core';
import {ResponsesService} from "../../services/responses-service";
import {Field} from "../../../../model/Field";
import {Worksheet} from "../../../../model/Worksheet";

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
  @Input() fieldId;
  private temp: any;
  public arrOfWorksheets: Worksheet[] = [];
  public arrOfValues: Worksheet;

  constructor(private service: ResponsesService) {
  }

  ngOnInit(): void {
    this.findAllFields();
    this.responses();
  }

  findAllFields() {
    this.service.findAllFields().subscribe((fields: Field[]) => {
      this.arrOfFields = fields;
    })
  }

  responses() {
    this.service.responses().subscribe((data: Worksheet[]) => {
      this.arrOfWorksheets = data;
    })
  }

  getAnswer(worksheet: Worksheet) {
    const temp = this.arrOfWorksheets.find(el => {
      return el.worksheetId === worksheet.worksheetId;
    })
    return temp.answerDTOS;
  }

}
