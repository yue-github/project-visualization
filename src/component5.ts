/**
 * author:吴同岳
 */
import { Component2D } from "./component2d";

export class Component5 extends Component2D {
    
    private canvas5Json: any;
    public setTarget(arg: any): void {
         
    }
    
    public constructor(id: string) {
        super(id);
        this.addTimeSlice(0, 0.5, "elasticOut");
    }

    protected update(): void {
        // throw new Error("Method not implemented.");
    }
    
    protected render(): void {
        // throw new Error("Method not implemented.");
    }
}