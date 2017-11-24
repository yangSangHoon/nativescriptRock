import {Observable} from 'data/observable';
import RockUser from './components/RockUser';
import buttonModule = require("ui/button");
import {setSelected} from './components/RockModel';

export class HelloWorldModel extends Observable {

    private user1;
    private user2;
    private btn1;
    private btn2;
    private refersh;

    constructor(page) {
        super();
        this.user1 = new RockUser(page, "user1");
        this.user2 = new RockUser(page, "user2");
        this.btn1 = new RockUser(page, "btn1");
        this.btn2 = new RockUser(page, "btn2");
        this.refersh = page.getViewById('refersh');
        this.eventSetting();
    }

    eventSetting() {
    	this.refersh.on(buttonModule.Button.tapEvent, () => {
            this.user1.reset();
            this.user2.reset();
            setSelected(-1);
        })

        /*this.btn1.on(buttonModule.Button.tapEvent, () => {
            this.user1.setWinner(1);
            this.user2.setWinner(0);
        })
        this.btn2.on(buttonModule.Button.tapEvent, () => {
        	this.user1.setWinner(0);
            this.user2.setWinner(1);
        })*/
		
    }
}