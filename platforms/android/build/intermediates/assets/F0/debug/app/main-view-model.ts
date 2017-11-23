import {Observable} from 'data/observable';
import RockUser from './components/RockUser';

export class HelloWorldModel extends Observable {

    private user1;
    private user2;

    constructor(page) {
        super();
        this.user1 = new RockUser(page, "user1");
        this.user2 = new RockUser(page, "user2");
    }
}