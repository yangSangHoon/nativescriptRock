"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var RockUser_1 = require("./components/RockUser");
var buttonModule = require("ui/button");
var RockModel_1 = require("./components/RockModel");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(page) {
        var _this = _super.call(this) || this;
        _this.user1 = new RockUser_1.default(page, "user1");
        _this.user2 = new RockUser_1.default(page, "user2");
        _this.btn1 = page.getViewById('btn1');
        _this.btn2 = page.getViewById('btn2');
        _this.refersh = page.getViewById('refersh');
        _this.eventSetting();
        return _this;
    }
    HelloWorldModel.prototype.eventSetting = function () {
        var _this = this;
        this.refersh.on(buttonModule.Button.tapEvent, function () {
            _this.user1.reset();
            _this.user2.reset();
            RockModel_1.setSelected(-1);
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
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUE2QztBQUM3Qyx3Q0FBMkM7QUFDM0Msb0RBQW1EO0FBRW5EO0lBQXFDLG1DQUFVO0lBUTNDLHlCQUFZLElBQUk7UUFBaEIsWUFDSSxpQkFBTyxTQU9WO1FBTkcsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtCQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0lBQ3hCLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQUEsaUJBZ0JDO1FBZkEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLHVCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDMUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbkNELENBQXFDLHVCQUFVLEdBbUM5QztBQW5DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCBSb2NrVXNlciBmcm9tICcuL2NvbXBvbmVudHMvUm9ja1VzZXInO1xuaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5pbXBvcnQge3NldFNlbGVjdGVkfSBmcm9tICcuL2NvbXBvbmVudHMvUm9ja01vZGVsJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSB1c2VyMTtcbiAgICBwcml2YXRlIHVzZXIyO1xuICAgIHByaXZhdGUgYnRuMTtcbiAgICBwcml2YXRlIGJ0bjI7XG4gICAgcHJpdmF0ZSByZWZlcnNoO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnVzZXIxID0gbmV3IFJvY2tVc2VyKHBhZ2UsIFwidXNlcjFcIik7XG4gICAgICAgIHRoaXMudXNlcjIgPSBuZXcgUm9ja1VzZXIocGFnZSwgXCJ1c2VyMlwiKTtcbiAgICAgICAgdGhpcy5idG4xID0gcGFnZS5nZXRWaWV3QnlJZCgnYnRuMScpO1xuICAgICAgICB0aGlzLmJ0bjIgPSBwYWdlLmdldFZpZXdCeUlkKCdidG4yJyk7XG4gICAgICAgIHRoaXMucmVmZXJzaCA9IHBhZ2UuZ2V0Vmlld0J5SWQoJ3JlZmVyc2gnKTtcbiAgICAgICAgdGhpcy5ldmVudFNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBldmVudFNldHRpbmcoKSB7XG4gICAgXHR0aGlzLnJlZmVyc2gub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VyMS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy51c2VyMi5yZXNldCgpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWQoLTEpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuYnRuMS5vbihidXR0b25Nb2R1bGUuQnV0dG9uLnRhcEV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIxLnNldFdpbm5lcigxKTtcbiAgICAgICAgICAgIHRoaXMudXNlcjIuc2V0V2lubmVyKDApO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJ0bjIub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICBcdHRoaXMudXNlcjEuc2V0V2lubmVyKDApO1xuICAgICAgICAgICAgdGhpcy51c2VyMi5zZXRXaW5uZXIoMSk7XG4gICAgICAgIH0pXG5cdFx0XG4gICAgfVxufSJdfQ==