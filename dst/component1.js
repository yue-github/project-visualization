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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define(["require", "exports", "./component2d"], function (require, exports, component2d_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component1 = /** @class */ (function (_super) {
        __extends(Component1, _super);
        function Component1(id) {
            var _this = _super.call(this, id) || this;
            _this.drawCircleOutEndDeg = 0;
            _this.circleOutWhite = 'white';
            // 设置光圈内部颜色变化
            _this.changeCircleOutInColor = true;
            _this.firstCount = 0;
            _this.addTimeSlice(0, 2, "exponentialInOut");
            _this.addTimeSlice(1, 3, "bounceIn");
            _this.addTimeSlice(2, 3, "quadraticInOut");
            _this.addTimeSlice(2.5, 3, "linear");
            _this.addTimeSlice(0, 6, "boundInOut");
            /**
             * canvas6节点
             */
            var node = _this.node;
            var screenX = window.screen.width;
            node.width = 1366 / 1.7075; //500
            node.height = 0.75 * node.width; //400
            node.style.background = "#000";
            node.style.position = "relative";
            // 圆半径
            _this.circleR = node.width / 6.66;
            // 等比缩放
            // node.style.transform = `scale(${this.node.width / 800}, ${this.node.height / 600})`;
            /**
             * 静态初始化
             */
            _this.staticInit();
            return _this;
        }
        /**
         *
         * @param arg 初始数据
         */
        Component1.prototype.setTarget = function (arg) {
            if (arg === void 0) { arg = null; }
            var json = [
                {
                    count: 1500,
                    color: '#28FF28',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: -150,
                    name: '正常企业',
                    percent: 0
                },
                {
                    count: 500,
                    color: 'pink',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: -150,
                    name: '轻微异常',
                    percent: 0
                },
                {
                    count: 45,
                    color: 'yellow',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: -340,
                    countY: 250,
                    name: '一般异常',
                    percent: 0
                },
                {
                    count: 15,
                    color: 'red',
                    dyLineX: 0,
                    dyLineY: 0,
                    countX: 230,
                    countY: 250,
                    name: '严重异常',
                    percent: 0
                }
            ];
            arg ? this.canvas6Json = arg : this.canvas6Json = json;
            // 深度克隆操作
            if (this.canvas6Json) {
                var arr = [];
                for (var _i = 0, _a = this.canvas6Json; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    var cloneObj = __rest(obj, []);
                    arr.push(cloneObj);
                }
                this.canvas6JsonClone = arr;
            }
            if (!this.isPlaying()) {
                this.start();
            }
        };
        Component1.prototype.update = function () {
            var _this = this;
            // 动态改变企业家数的值
            if (this.canvas6Json) {
                for (var index in this.canvas6Json) {
                    this.canvas6Json[index].count = this.canvas6JsonClone[index].count * this.getTime(parseInt(index));
                }
            }
            // 外圈闪烁效果
            if (this.drawCircleOutEndDeg = 365 * Math.PI / 180) {
                this.changeCircleOutInColor = !this.changeCircleOutInColor;
            }
            this.changeCircleOutInColor ?
                this.circleOutWhite = '#28FF28' :
                this.circleOutWhite = 'white';
            // 更新扇形外弧的结束角
            this.drawCircleOutEndDeg = 365 * Math.PI / 180 * this.getTime(4);
            // 动线跟踪
            if (this.canvas6Json) {
                var allCount_1 = 0;
                this.canvas6Json.forEach(function (e, i) {
                    allCount_1 += e.count;
                });
                this.canvas6Json.forEach(function (e, i) {
                    var hypotenuse = _this.circleR, angle = Math.PI / 180;
                    // 更新百分比数据
                    _this.canvas6Json[i].percent = _this.toPercent(_this.getTime(4) * (_this.canvas6Json[i].count / allCount_1));
                    if (i == 0) {
                        e.dyLineX = Math.cos(90 * Math.PI + _this.drawHandle(i) / 2) * hypotenuse;
                        e.dyLineY = Math.sin(90 * Math.PI + _this.drawHandle(i) / 2) * hypotenuse;
                    }
                    else {
                        // 计算动点的坐标
                        angle = 90 * Math.PI - (_this.drawHandle(i - 1) - _this.drawHandle(i)) / 2 + _this.drawHandle(i - 1);
                        _this.canvas6Json[i].dyLineX = Math.cos(angle) * hypotenuse;
                        _this.canvas6Json[i].dyLineY = Math.sin(angle) * hypotenuse;
                    }
                });
            }
        };
        /**
         * 动态渲染
         */
        Component1.prototype.render = function () {
            var _this = this;
            if (this.clearAll()) {
                this.drawSector();
                this.drawFillCircle();
                this.drawCircleOut();
                // 动态数据渲染
                if (this.canvas6Json) {
                    this.canvas6Json.forEach(function (e) {
                        _this.drawPercentage(e.countX, e.countY, e.percent, e.name, Math.ceil(e.count), e.dyLineX, e.dyLineY, e.color);
                    });
                }
            }
        };
        /**
         * 渲染静态
         */
        Component1.prototype.staticInit = function () {
            var ctx = this.context;
            if (ctx) {
                // 掩盖秘密
                ctx.beginPath();
                ctx.rect(0, 0, 1000, 200);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.closePath();
                ctx.save();
                ctx.beginPath();
                ctx.arc(40, 40, 20, 0, 2 * Math.PI);
                ctx.fillStyle = "blue";
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.textAlign = "center";
                ctx.font = "25px Arial";
                ctx.fillStyle = '#fff';
                ctx.fillText('1', 40, 50);
                ctx.closePath();
                ctx.beginPath();
                ctx.font = "25px Arial";
                ctx.fillStyle = 'blue';
                ctx.fillText('企业实时数据统计', 170, 50);
                ctx.closePath();
                // 改变图原点参照位置
                ctx.translate(this.node.width / 1.9, this.node.height / 2);
            }
        };
        /**
         * 整理圆的终点角度
         */
        Component1.prototype.drawHandle = function (num) {
            var countAll = 0;
            this.canvas6Json.forEach(function (ele, index) {
                countAll += ele.count;
            });
            var count = 0;
            this.canvas6Json.forEach(function (element, index) {
                if (index <= num) {
                    count += element.count;
                }
            });
            return (count / countAll * 360) * Math.PI / 180;
        };
        /**
         * 画主圆
         */
        Component1.prototype.drawSector = function () {
            var _this = this;
            var ctx = this.context;
            // 静态模拟画圆
            if (ctx && this.canvas6Json) {
                ctx.save();
                this.canvas6Json.forEach(function (ele, index) {
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    if (index == 0) {
                        ctx.arc(0, 0, _this.circleR, 0, _this.drawHandle(index));
                    }
                    else {
                        ctx.arc(0, 0, _this.circleR, _this.drawHandle(index - 1), _this.drawHandle(index));
                    }
                    ctx.fillStyle = ele.color;
                    ctx.fill();
                    ctx.closePath();
                });
            }
        };
        /**
         * 画百分比等
         */
        Component1.prototype.drawPercentage = function (x, y, e, name, count, dx, dy, fontColor) {
            var ctx = this.context;
            if (ctx) {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.font = "35px Arial";
                ctx.textAlign = 'left';
                ctx.strokeStyle = fontColor;
                ctx.strokeText(e + '', x, y);
                ctx.closePath();
                ctx.beginPath();
                if (y < 0) {
                    ctx.moveTo(x + 50, y + 10);
                    ctx.lineTo(x + 50, y + 100);
                }
                else {
                    ctx.moveTo(x + 50, y - 40);
                    ctx.lineTo(x + 50, y - 120);
                }
                ctx.lineTo(dx, dy);
                ctx.strokeStyle = fontColor;
                ctx.stroke();
                ctx.closePath();
                // 名称绘制
                ctx.beginPath();
                ctx.font = "25px Arial";
                ctx.textAlign = 'right';
                ctx.fillStyle = 'white';
                if (y < 0) {
                    ctx.fillText(name, x + 40, y + 60);
                    ctx.strokeText(count + '', x + 110, y + 60);
                }
                else {
                    ctx.fillText(name, x + 40, y - 60);
                    ctx.strokeText(count + '', x + 110, y - 60);
                }
                ctx.closePath();
            }
        };
        /**
         * 画图像外围圈
         */
        Component1.prototype.drawCircleOut = function () {
            var ctx = this.context;
            if (ctx && this.circleR) {
                ctx.save();
                //开始新路径
                ctx.beginPath();
                //重新设置画笔
                ctx.lineWidth = 20;
                ctx.strokeStyle = "blue";
                var grd = ctx.createRadialGradient(0, 0, this.circleR, 0, 0, this.circleR + 50);
                grd.addColorStop(0, "red");
                grd.addColorStop(0.5, this.circleOutWhite);
                grd.addColorStop(1, "red");
                // drawCircleOutEndDeg表示画次圆的结束角度
                ctx.arc(0, 0, this.circleR + 25, 0, this.drawCircleOutEndDeg, false);
                ctx.strokeStyle = grd;
                ctx.stroke();
                //封闭新路径
                ctx.closePath();
            }
        };
        Component1.prototype.clearAll = function () {
            var ctx = this.context;
            if (ctx) {
                ctx.beginPath();
                ctx.clearRect(-400, -200, 1000, 1000);
                ctx.closePath();
                return true;
            }
        };
        Component1.prototype.toPercent = function (num) {
            return (num * 100).toFixed(2) + '%';
        };
        /**
         * 填补，作空心圆
         */
        Component1.prototype.drawFillCircle = function () {
            var ctx = this.context;
            if (ctx) {
                ctx.beginPath();
                ctx.arc(0, 0, this.circleR - 30, 0, Math.PI * 2);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.closePath();
                // 画圆内部的黑色块上的字
                ctx.beginPath();
                var gradient = ctx.createLinearGradient(0, 0, 15, 0);
                gradient.addColorStop(0, "#28FF28");
                gradient.addColorStop(0.5, "yellow");
                gradient.addColorStop(1.0, "white");
                // 用渐变填色
                ctx.fillStyle = gradient;
                ctx.font = '25px arial';
                ctx.textAlign = 'center';
                ctx.fillText(this.getAllEnterprise() + '', 0, -20);
                ctx.closePath();
                ctx.beginPath();
                ctx.font = '20px arial';
                ctx.fillStyle = 'white';
                ctx.fillText('监管企业总数', 0, 20);
                ctx.closePath();
            }
        };
        /**
         * 获取企业总数，有一样的代码块可替换，减少代码量
         */
        Component1.prototype.getAllEnterprise = function () {
            var countAll = 0;
            if (this.canvas6JsonClone) {
                this.canvas6JsonClone.forEach(function (ele, index) {
                    countAll += ele.count;
                });
                return countAll;
            }
        };
        return Component1;
    }(component2d_1.Component2D));
    exports.Component1 = Component1;
});
