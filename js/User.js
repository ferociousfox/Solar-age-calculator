export class User {
  constructor(firstName, lastName, userAge) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = userAge;
    console.log(userAge);
  }

  ageInSeconds() {
    return this.userAge * 31536000;
  }
  mercuryAge() {
    return (this.userAge * 31536000) / 0.24;
  }
  venusAge() {
    return (this.userAge * 31536000) / 0.62;
  }
  marsAge() {
    return (this.userAge * 31536000) / 1.88;
  }
  jupiterAge() {
    return (this.userAge * 31536000) / 11.86;
  }
}
