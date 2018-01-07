export class User {
  constructor(firstName, lastName, userAge) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userAge = userAge;
    console.log(userAge);
  }

  mercuryAge() {
    const mercury = 0.24;
    return this.userAge / mercury;
  }
  venusAge() {
    const venus = 0.62;
    return this.userAge / venus;
  }
  marsAge() {
    const mars = 1.88;
    return this.userAge / mars;
  }
  jupiterAge() {
    const jupiter = 11.86;
    return this.userAge / jupiter;
  }
}
