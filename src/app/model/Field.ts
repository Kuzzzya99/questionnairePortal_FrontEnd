export class Field {
  private fieldId;
  private label;
  private type;
  private required;
  private isActive;

  constructor(id: string,
              label: string,
              type: string,
              required: boolean,
              isActive: boolean) {
    this.fieldId = id;
    this.label = label;
    this.type = type;
    this.required = required;
    this.isActive = isActive;
  }
}

