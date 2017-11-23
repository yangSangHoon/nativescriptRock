"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var RockUser_1 = require("./components/RockUser");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel(page) {
        var _this = _super.call(this) || this;
        _this.user1 = new RockUser_1.default(page, "user1");
        _this.user2 = new RockUser_1.default(page, "user2");
        return _this;
    }
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLGtEQUE2QztBQUU3QztJQUFxQyxtQ0FBVTtJQUszQyx5QkFBWSxJQUFJO1FBQWhCLFlBQ0ksaUJBQU8sU0FHVjtRQUZHLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxrQkFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6QyxLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksa0JBQVEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7O0lBQzdDLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFWRCxDQUFxQyx1QkFBVSxHQVU5QztBQVZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IFJvY2tVc2VyIGZyb20gJy4vY29tcG9uZW50cy9Sb2NrVXNlcic7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgdXNlcjE7XG4gICAgcHJpdmF0ZSB1c2VyMjtcblxuICAgIGNvbnN0cnVjdG9yKHBhZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51c2VyMSA9IG5ldyBSb2NrVXNlcihwYWdlLCBcInVzZXIxXCIpO1xuICAgICAgICB0aGlzLnVzZXIyID0gbmV3IFJvY2tVc2VyKHBhZ2UsIFwidXNlcjJcIik7XG4gICAgfVxufSJdfQ==