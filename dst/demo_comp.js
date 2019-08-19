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
    var DemoComponent = /** @class */ (function (_super) {
        __extends(DemoComponent, _super);
        function DemoComponent(id) {
            var _this = _super.call(this, id) || this;
            _this.x1 = 0;
            _this.y1 = 0;
            _this.x2 = 0;
            _this.y2 = 0;
            _this.dx = 0;
            _this.dy = 0;
            _this.addTimeSlice(0, 0.5, "elasticOut");
            return _this;
        }
        DemoComponent.prototype.setTarget = function (arg) {
            if (!this.isPlaying()) {
                this.dx = arg.x - this.x1;
                this.dy = arg.y - this.y1;
                this.start();
            }
        };
        DemoComponent.prototype.update = function () {
            var value = this.getTime(0);
            this.x2 = this.x1 + value * this.dx;
            this.y2 = this.y1 + value * this.dy;
        };
        DemoComponent.prototype.render = function () {
            if (this.context) {
                this.context.clearRect(0, 0, this.width, this.height);
                this.context.beginPath();
                this.context.moveTo(this.x1, this.y1);
                this.context.lineTo(this.x2, this.y2);
                this.context.stroke();
                this.context.closePath();
                this.context.beginPath();
                this.context.ellipse(this.x2, this.y2, 3, 3, 0, 0, 360);
                this.context.fillStyle = "white";
                this.context.fill();
                this.context.stroke();
                this.context.closePath();
            }
        };
        return DemoComponent;
    }(component2d_1.Component2D));
    exports.DemoComponent = DemoComponent;
});
