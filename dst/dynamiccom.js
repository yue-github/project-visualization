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
define(["require", "exports", "./comunication", "./ajax"], function (require, exports, comunication_1, ajax_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DynamicCom = /** @class */ (function (_super) {
        __extends(DynamicCom, _super);
        function DynamicCom() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DynamicCom.prototype.func1 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.func2 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.func3 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.func4 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.func5 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.func6 = function (arg) {
            // throw new Error("Method not implemented.");
        };
        DynamicCom.prototype.ajax = function () {
            var ajax = new ajax_1.Ajax();
            var method = 'get';
            var url = 'http://www.vocjs.com/api/mobile/getuserinfo';
            var data = '';
            var dataType = 'json';
            var res = ajax.isAjax(method, url, data, dataType);
            return res;
        };
        return DynamicCom;
    }(comunication_1.Comunication));
    exports.DynamicCom = DynamicCom;
});
