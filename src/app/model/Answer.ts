export class Answer {
  private fieldId;
  private value;

  constructor(fieldId: number,
              value: string,
  ) {
    this.fieldId = fieldId;
    this.value = value;
  }
}
