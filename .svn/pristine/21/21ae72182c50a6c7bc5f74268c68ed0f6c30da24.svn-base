define(["require", "exports", "./easing"], function (require, exports, easing_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeSlice = /** @class */ (function () {
        function TimeSlice(start, duration, en) {
            this.time = 0;
            this.start = 0;
            this.end = 0;
            this.duration = 0;
            this.value = 0;
            this.start = start;
            this.duration = duration;
            this.end = start + duration;
            this.easing = easing_1.Easing.find(en);
            this.reset();
        }
        TimeSlice.prototype.reset = function () {
            this.time = 0;
            this.value = 0;
        };
        TimeSlice.prototype.getEndTime = function () {
            return this.end;
        };
        TimeSlice.prototype.update = function (dt) {
            this.time += dt;
            if (this.time >= this.start && this.time <= this.end) {
                var t = this.time - this.start;
                var v = t / this.duration;
                this.value = this.easing(v);
            }
        };
        TimeSlice.prototype.getValue = function () {
            return this.value;
        };
        return TimeSlice;
    }());
    exports.TimeSlice = TimeSlice;
});
