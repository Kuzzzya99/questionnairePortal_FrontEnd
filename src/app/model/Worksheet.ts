import {Answer} from "./Answer";

export class Worksheet {
  public worksheetId;
  public answerDTOS: Answer[] = [];


  constructor(worksheetId, answerDTOS: Answer[]) {
    this.worksheetId = worksheetId;
    this.answerDTOS = answerDTOS;
  }
}
