export class User {
  private login;
  private password;
  private firstName;
  private lastName;
  private phoneNumber;

  constructor(login: string,
              password: string,
              firstName: string,
              lastName: string,
              phoneNumber: string) {
    this.login = login;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }
}
