var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component5 = /** @class */ (function (_super) {
        __extends(Component5, _super);
        function Component5(id) {
            var _this = _super.call(this, id) || this;
            _this.addTimeSlice(0, 0.5, "elasticOut");
            return _this;
        }
        Component5.prototype.setTarget = function (arg) {
        };
        Component5.prototype.update = function () {
            // throw new Error("Method not implemented.");
        };
        Component5.prototype.render = function () {
            // throw new Error("Method not implemented.");
        };
        return Component5;
    }(component2d_1.Component2D));
    exports.Component5 = Component5;
});
