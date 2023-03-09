/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.team = [];
  }

  add(character) {
    this.team.push(character);
  }

  [Symbol.iterator]() {
    let index = 0;
    const teamList = this.team;

    return {
      next() {
        return {
          value: teamList[index++],
          done: index > teamList.length,
        };
      },
    };
  }
}
