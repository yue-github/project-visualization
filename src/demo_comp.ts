import { Component2D } from "./component2d";
import { Easing } from "./easing";

export class DemoComponent extends Component2D {
    
    private x1: number = 0;
    private y1: number = 0;
    private x2: number = 0;
    private y2: number = 0;
    private dx: number = 0;
    private dy: number = 0;

    public constructor(id: string) {
        super(id);
        this.addTimeSlice(0, 0.5, "elasticOut");
    }

    public setTarget(arg: any): void {
        if (!this.isPlaying()) {
            this.dx = arg.x - this.x1;
            this.dy = arg.y - this.y1;
            this.start();
        }
    }

    protected update(): void {
        let value = this.getTime(0);
        this.x2 = this.x1 + value * this.dx;
        this.y2 = this.y1 + value * this.dy;
    }

    protected render(): void {
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
    }
}