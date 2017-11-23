"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RockUser = (function () {
    function RockUser(page, id) {
        this.imgUrl = '';
        this.imgUrls = ['~/images/scssors.png', '~/images/rock.png', '~/images/paper.png'];
        this.imgNum = 0;
        this.user = page.getViewById(id);
        console.log(this.user);
        this.imgUrl = this.imgUrls[1];
        this.startRolling();
    }
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
        }, 1000);
    };
    return RockUser;
}());
exports.default = RockUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQVFJLGtCQUFZLElBQUksRUFBRSxFQUFFO1FBTFosV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQWtCLENBQUMsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUU3RixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9ja1VzZXIge1xuXG4gICAgcHJpdmF0ZSB1c2VyO1xuICAgIHByaXZhdGUgaW1nVXJsOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGltZ1VybHM6IEFycmF5PHN0cmluZz4gPSBbJ34vaW1hZ2VzL3Njc3NvcnMucG5nJywgJ34vaW1hZ2VzL3JvY2sucG5nJywgJ34vaW1hZ2VzL3BhcGVyLnBuZyddO1xuICAgIHByaXZhdGUgdGltZXI7XG4gICAgcHJpdmF0ZSBpbWdOdW06IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwYWdlLCBpZCkge1xuICAgICAgICB0aGlzLnVzZXIgPSBwYWdlLmdldFZpZXdCeUlkKGlkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VyKTtcbiAgICAgICAgdGhpcy5pbWdVcmwgPSB0aGlzLmltZ1VybHNbMV07XG4gICAgICAgIHRoaXMuc3RhcnRSb2xsaW5nKCk7XG4gICAgfVxuXG4gICAgc3RhcnRSb2xsaW5nKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbWdOdW0gPSAodGhpcy5pbWdOdW0gKyAxKSAlIDM7XG4gICAgICAgICAgICB0aGlzLnVzZXIuc3JjID0gdGhpcy5pbWdVcmxzW3RoaXMuaW1nTnVtXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmltZ051bSA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlci53aWR0aCA9ICc0MCUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIud2lkdGggPSAnMzUlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG5cbn0iXX0=