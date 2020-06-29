export class Field {
  fieldId;
  label;
  type;
  required;
  isActive;

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

