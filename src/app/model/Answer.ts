export class Answer {
  private id;
  private label;
  public answer;

  constructor(id: number,
              label: string,
              answer: string,
  ) {
    this.id = id;
    this.label = label;
    this.answer = answer;
  }
}

