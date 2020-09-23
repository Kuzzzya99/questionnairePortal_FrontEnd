export class DataForForm {
  id;
  label;
  type;
  required;
  active;
  options: string[];

  constructor(id, label, type, required, active, options: string[]) {
    this.id = id;
    this.label = label;
    this.type = type;
    this.required = required;
    this.active = active;
    this.options = options;
  }
}

