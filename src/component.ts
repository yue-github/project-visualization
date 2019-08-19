import { Easing } from "./easing";
import { TimeSlice } from "./timeslice";

export abstract class Component {
    private timerId: number | null = null;
    private tslices: Array<TimeSlice>;
    private duration: number = 0;
    private time: number = 0;

    public constructor() {
        this.tslices = new Array<TimeSlice>();
    }
    protected isPlaying(): boolean {
        return this.timerId !== null;
    }
    protected addTimeSlice(s: number, d: number, e: string): void {
        this.tslices.push(new TimeSlice(s, d, e));
    }
    protected getTime(id: number): number {
        return this.tslices[id].getValue();
    }
    protected start(): void {
        this.time = 0;
        this.duration = 0;
        for (var i = 0; i < this.tslices.length; i++) {
            let end = this.tslices[i].getEndTime();
            if (end > this.duration)
                this.duration = end;
            this.tslices[i].reset();
        }
        this.timerId = setInterval(()=>{
            this.animate(0.03);
        }, 30);
    }
    protected stop(): void {
        clearInterval(this.timerId);
        this.timerId = null;
    }
    private animate(dt: number): void {
        this.time += dt;
        if (this.time >= this.duration)
            this.stop();
        for (var i = 0; i < this.tslices.length; i++)
            this.tslices[i].update(dt);
        this.update();
        this.render();
    }
    protected abstract update(): void;
    protected abstract render(): void;
    public abstract setTarget(arg: any): void;
}