import Daemon from './Daemon';
import Magician from './Magician';
import Team from './Team';

const char1 = new Daemon('Baltazar');
const char2 = new Magician('Gendalf');
const char3 = new Magician('Saruman');
const team = new Team();

team.add(char1);
team.add(char2);
team.add(char3);

for (const char of team) {
  console.log(char);
}
