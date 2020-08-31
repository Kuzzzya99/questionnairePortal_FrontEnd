export class DataForForm {
  label;
  type;
  required;
  active;
  options: string[];

  constructor(label, type, required, active, options: string[]) {
    this.label = label;
    this.type = type;
    this.required = required;
    this.active = active;
    this.options = options;
  }
}

