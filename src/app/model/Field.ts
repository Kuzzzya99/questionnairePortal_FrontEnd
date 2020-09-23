export class Field {
  fieldId;
  label;
  type;
  required;
  active;

  constructor(fieldId: string,
              label: string,
              type: string,
              required: boolean,
              active: boolean) {
    this.fieldId = fieldId;
    this.label = label;
    this.type = type;
    this.required = required;
    this.active = active;
  }
}

