"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var RockUser_1 = require("./RockUser");
var selected = -1;
exports.setSelected = function (num) {
    selected = num;
};
exports.getSelected = function () {
    return selected;
};
var RockModel = (function () {
    function RockModel(page) {
        this.user1 = new RockUser_1.default(page, "user1");
        this.user2 = new RockUser_1.default(page, "user2");
        this.btn1 = page.getViewById('btn1');
        this.btn2 = page.getViewById('btn2');
        this.refersh = page.getViewById('refersh');
        this.eventSetting();
    }
    RockModel.prototype.eventSetting = function () {
        var _this = this;
        this.refersh.on(buttonModule.Button.tapEvent, function () {
            _this.user1.reset();
            _this.user2.reset();
            exports.setSelected(-1);
        });
        this.btn1.on(buttonModule.Button.tapEvent, function () {
            _this.user1.setWinner(1);
            _this.user2.setWinner(0);
        });
        this.btn2.on(buttonModule.Button.tapEvent, function () {
            _this.user1.setWinner(0);
            _this.user2.setWinner(1);
        });
    };
    return RockModel;
}());
exports.RockModel = RockModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9ja01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm9ja01vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQTJDO0FBRTNDLHVDQUFrQztBQUVsQyxJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQTtBQUVaLFFBQUEsV0FBVyxHQUFHLFVBQUEsR0FBRztJQUM3QixRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHO0lBQzFCLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUY7SUFRSSxtQkFBWSxJQUFJO1FBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtCQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFBQSxpQkFnQkM7UUFmQSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbkIsbUJBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUMxQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnV0dG9uTW9kdWxlID0gcmVxdWlyZShcInVpL2J1dHRvblwiKTtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCBSb2NrVXNlciBmcm9tICcuL1JvY2tVc2VyJztcblxubGV0IHNlbGVjdGVkOiBudW1iZXIgPSAtMVxuXG5leHBvcnQgY29uc3Qgc2V0U2VsZWN0ZWQgPSBudW0gPT4ge1xuXHRzZWxlY3RlZCA9IG51bTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTZWxlY3RlZCA9ICgpID0+IHtcblx0cmV0dXJuIHNlbGVjdGVkO1xufTtcblxuZXhwb3J0IGNsYXNzIFJvY2tNb2RlbCB7XG5cbiAgICBwcml2YXRlIHVzZXIxO1xuICAgIHByaXZhdGUgdXNlcjI7XG4gICAgcHJpdmF0ZSBidG4xO1xuICAgIHByaXZhdGUgYnRuMjtcbiAgICBwcml2YXRlIHJlZmVyc2g7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlKSB7XG4gICAgICAgIHRoaXMudXNlcjEgPSBuZXcgUm9ja1VzZXIocGFnZSwgXCJ1c2VyMVwiKTtcbiAgICAgICAgdGhpcy51c2VyMiA9IG5ldyBSb2NrVXNlcihwYWdlLCBcInVzZXIyXCIpO1xuICAgICAgICB0aGlzLmJ0bjEgPSBwYWdlLmdldFZpZXdCeUlkKCdidG4xJyk7XG4gICAgICAgIHRoaXMuYnRuMiA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ2J0bjInKTtcbiAgICAgICAgdGhpcy5yZWZlcnNoID0gcGFnZS5nZXRWaWV3QnlJZCgncmVmZXJzaCcpO1xuICAgICAgICB0aGlzLmV2ZW50U2V0dGluZygpO1xuICAgIH1cblxuICAgIGV2ZW50U2V0dGluZygpIHtcbiAgICBcdHRoaXMucmVmZXJzaC5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIxLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnVzZXIyLnJlc2V0KCk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZCgtMSk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5idG4xLm9uKGJ1dHRvbk1vZHVsZS5CdXR0b24udGFwRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlcjEuc2V0V2lubmVyKDEpO1xuICAgICAgICAgICAgdGhpcy51c2VyMi5zZXRXaW5uZXIoMCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYnRuMi5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgIFx0dGhpcy51c2VyMS5zZXRXaW5uZXIoMCk7XG4gICAgICAgICAgICB0aGlzLnVzZXIyLnNldFdpbm5lcigxKTtcbiAgICAgICAgfSlcblx0XHRcbiAgICB9XG59Il19