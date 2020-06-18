export class User {
  private email;
  private password;
  private firstName;
  private lastName;
  private phoneNumber;

  constructor(email: string,
              password: string,
              firstName: string,
              lastName: string,
              phoneNumber: string) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
