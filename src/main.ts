import { Person, SocialNetwork} from "./social-network";

class App implements SocialNetwork {
  title = 'Awesome TS';
  getUsers() {
    return [{name: 'Andre'}];
  }
}
