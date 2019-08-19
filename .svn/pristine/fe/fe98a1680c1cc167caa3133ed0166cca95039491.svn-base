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
define(["require", "exports", "./component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component2D = /** @class */ (function (_super) {
        __extends(Component2D, _super);
        function Component2D(id) {
            var _this = _super.call(this) || this;
            _this.node = null;
            _this.context = null;
            _this.width = 0;
            _this.height = 0;
            _this.node = document.getElementById(id);
            if (_this.node) {
                _this.context = _this.node.getContext("2d");
                _this.width = _this.node.width;
                _this.height = _this.node.height;
            }
            _this.render();
            return _this;
        }
        Component2D.prototype.getNode = function () {
            return this.node;
        };
        return Component2D;
    }(component_1.Component));
    exports.Component2D = Component2D;
});
