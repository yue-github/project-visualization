import { Easing } from "./easing";

export class TimeSlice {

    private time: number = 0;
    private start: number = 0;
    private end: number = 0;
    private duration: number = 0;
    private value: number = 0;
    private easing: (v: number)=>number;

    public constructor(start: number, duration: number, en: string) {
        this.start = start;
        this.duration = duration;
        this.end = start + duration;
        this.easing = Easing.find(en);
        this.reset();
    }

    public reset() {
        this.time = 0;
        this.value = 0;
    }

    public getEndTime(): number {
        return this.end;
    }

    public update(dt: number): void {
        this.time += dt;
        if (this.time >= this.start && this.time <= this.end) {
            let t = this.time - this.start;
            let v = t / this.duration;
            this.value = this.easing(v);
        }
    }

    public getValue(): number {
        return this.value;
    }
}