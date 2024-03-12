/* eslint max-classes-per-file: ["error", 2] */

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}

class Team {
  constructor() {
    this.members = [];
  }

  addAll(...teammates) {
    teammates.forEach((i) => {
      this.members.push(i);
    });
  }

  * [Symbol.iterator]() {
    for (let value = 0; value <= this.members.length - 1; value += 1) {
      yield this.members[value];
    }
  }
}
