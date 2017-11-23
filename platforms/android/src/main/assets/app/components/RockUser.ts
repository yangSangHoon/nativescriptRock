import buttonModule = require("ui/button");

export default class RockUser {

    private user;
    private imgUrl: string = '';
    private imgUrls: Array<string> = ['~/images/scssors.png', '~/images/rock.png', '~/images/paper.png'];
    private timer;
    private imgNum: number = 0;

    constructor(page, id) {
        this.user = page.getViewById(id);

        this.imgUrl = this.imgUrls[0];
        this.startRolling();
        this.eventsetting();
    }

    eventsetting() {
        console.log(this.user);
        this.user.on(buttonModule.Button.tapEvent, () => {
            clearInterval(this.timer);
        })
    }

    startRolling() {
        this.timer = setInterval(() => {
            this.imgNum = (this.imgNum + 1) % 3;
            this.user.src = this.imgUrls[this.imgNum];
            if (this.imgNum === 2) {
                this.user.width = '40%';
            } else {
                this.user.width = '35%';
            }
        }, 100);
    }


}