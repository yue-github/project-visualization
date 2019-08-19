import { Component } from "./component";

export abstract class Component2D extends Component {

    protected node: HTMLCanvasElement | null = null;
    protected context: CanvasRenderingContext2D | null = null;
    protected width: number = 0;
    protected height: number = 0;
    
    public constructor(id: string) {
        super();
        this.node = document.getElementById(id) as HTMLCanvasElement;
        if (this.node) {
            this.context = this.node.getContext("2d");
            this.width = this.node.width;
            this.height = this.node.height;
        }
        this.render();
    }

    public getNode(): HTMLCanvasElement | null {
        return this.node;
    }
}