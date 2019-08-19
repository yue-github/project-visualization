define(["require", "exports", "./timeslice"], function (require, exports, timeslice_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Component = /** @class */ (function () {
        function Component() {
            this.timerId = null;
            this.duration = 0;
            this.time = 0;
            this.tslices = new Array();
        }
        Component.prototype.isPlaying = function () {
            return this.timerId !== null;
        };
        Component.prototype.addTimeSlice = function (s, d, e) {
            this.tslices.push(new timeslice_1.TimeSlice(s, d, e));
        };
        Component.prototype.getTime = function (id) {
            return this.tslices[id].getValue();
        };
        Component.prototype.start = function () {
            var _this = this;
            this.time = 0;
            this.duration = 0;
            for (var i = 0; i < this.tslices.length; i++) {
                var end = this.tslices[i].getEndTime();
                if (end > this.duration)
                    this.duration = end;
                this.tslices[i].reset();
            }
            this.timerId = setInterval(function () {
                _this.animate(0.03);
            }, 30);
        };
        Component.prototype.stop = function () {
            clearInterval(this.timerId);
            this.timerId = null;
        };
        Component.prototype.animate = function (dt) {
            this.time += dt;
            if (this.time >= this.duration)
                this.stop();
            for (var i = 0; i < this.tslices.length; i++)
                this.tslices[i].update(dt);
            this.update();
            this.render();
        };
        return Component;
    }());
    exports.Component = Component;
});
