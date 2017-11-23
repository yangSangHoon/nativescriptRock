"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonModule = require("ui/button");
var RockUser = (function () {
    function RockUser(page, id) {
        this.imgUrl = '';
        this.imgUrls = ['~/images/scssors.png', '~/images/rock.png', '~/images/paper.png'];
        this.imgNum = 0;
        this.user = page.getViewById(id);
        this.imgUrl = this.imgUrls[0];
        this.startRolling();
        this.eventsetting();
    }
    RockUser.prototype.eventsetting = function () {
        var _this = this;
        console.log(this.user);
        this.user.on(buttonModule.Button.tapEvent, function () {
            clearInterval(_this.timer);
        });
    };
    RockUser.prototype.startRolling = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.imgNum = (_this.imgNum + 1) % 3;
            _this.user.src = _this.imgUrls[_this.imgNum];
            if (_this.imgNum === 2) {
                _this.user.width = '40%';
            }
            else {
                _this.user.width = '35%';
            }
        }, 100);
    };
    return RockUser;
}());
exports.default = RockUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9ja1VzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSb2NrVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEyQztBQUUzQztJQVFJLGtCQUFZLElBQUksRUFBRSxFQUFFO1FBTFosV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQWtCLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUU3RixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsK0JBQVksR0FBWjtRQUFBLGlCQUtDO1FBSkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDdkMsYUFBYSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1dHRvbk1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9idXR0b25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvY2tVc2VyIHtcblxuICAgIHByaXZhdGUgdXNlcjtcbiAgICBwcml2YXRlIGltZ1VybDogc3RyaW5nID0gJyc7XG4gICAgcHJpdmF0ZSBpbWdVcmxzOiBBcnJheTxzdHJpbmc+ID0gWyd+L2ltYWdlcy9zY3Nzb3JzLnBuZycsICd+L2ltYWdlcy9yb2NrLnBuZycsICd+L2ltYWdlcy9wYXBlci5wbmcnXTtcbiAgICBwcml2YXRlIHRpbWVyO1xuICAgIHByaXZhdGUgaW1nTnVtOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocGFnZSwgaWQpIHtcbiAgICAgICAgdGhpcy51c2VyID0gcGFnZS5nZXRWaWV3QnlJZChpZCk7XG5cbiAgICAgICAgdGhpcy5pbWdVcmwgPSB0aGlzLmltZ1VybHNbMF07XG4gICAgICAgIHRoaXMuc3RhcnRSb2xsaW5nKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgZXZlbnRzZXR0aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xuICAgICAgICB0aGlzLnVzZXIub24oYnV0dG9uTW9kdWxlLkJ1dHRvbi50YXBFdmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydFJvbGxpbmcoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltZ051bSA9ICh0aGlzLmltZ051bSArIDEpICUgMztcbiAgICAgICAgICAgIHRoaXMudXNlci5zcmMgPSB0aGlzLmltZ1VybHNbdGhpcy5pbWdOdW1dO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1nTnVtID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyLndpZHRoID0gJzQwJSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci53aWR0aCA9ICczNSUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cblxuXG59Il19