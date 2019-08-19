/**
 * author:吴同岳
 */
import { Component2D } from "./component2d";

export class Component6 extends Component2D {
    
    private canvas6Json: any;
    private countTestData: number;
    private canvas6JsonClone: any;
    protected circleR: any;
    private drawCircleOutEndDeg: any = 0;
    private circleOutWhite: any = 'white';
    // 设置光圈内部颜色变化
    private changeCircleOutInColor: Boolean = true;
    private firstCount: any = 0;
/**
 * 
 * @param arg 初始数据
 */
    public setTarget(arg: any = null): void {
        let json : any = [
            {
                count: 150,
                color: '#28FF28',
                dyLineX: 0,
                dyLineY: 0,
                countX: -340,
                countY: -150,
                name : 'UV',
                percent : 0
            },
            {
                count: 23,
                color: 'red',
                dyLineX: 0,
                dyLineY: 0,
                countX: 230,
                countY: -150,
                name : '活性炭',
                percent : 0
            },
            {
                count: 45,
                color: 'yellow',
                dyLineX: 0,
                dyLineY: 0,
                countX: -340,
                countY: 250,
                name : 'RCO',
                percent : 0
            },
            {
                count: 32,
                color: 'pink',
                dyLineX: 0,
                dyLineY: 0,
                countX: 230,
                countY: 250,
                name : 'RTO',
                percent : 0
            }
        ]
        arg ? this.canvas6Json = arg:this.canvas6Json = json;
        // 深度克隆操作
        if(this.canvas6Json) {
            let arr: any = [];
            for (let obj of this.canvas6Json){
                let {...cloneObj}= obj;
                arr.push(cloneObj);
            }
            this.canvas6JsonClone = arr;
        }
        
        if (!this.isPlaying()) {
            this.start();
        }
    }
    
    public constructor(id: string) {
        super(id);
        this.addTimeSlice(0, 2, "exponentialInOut");
        this.addTimeSlice(1, 3, "bounceIn");
        this.addTimeSlice(2, 3, "quadraticInOut");
        this.addTimeSlice(2.5, 3, "linear");
        this.addTimeSlice(0, 6, "elasticOut");
        /**
         * canvas6节点
         */
        const node=this.node;
        let screenX:number = 0;
        // 获取设备宽高
        screenX = window.screen.width;
            node.width = 1366 / 1.7075;//500
            node.height = 0.75 * node.width;//400
            node.style.background = "#000";
            node.style.position = "relative";
            node.style['float'] = 'right';
        // 设置圆半径
            this.circleR = 120;
            // 等比缩放
            this.node.style.transform = `scale(${this.node.width / 800},${this.node.height / 600})`;
        /**
         * 静态初始化
         */
        this.staticInit();
    }

    protected update(): void {
        // 动态改变企业家数的值
        if(this.canvas6Json){
           for(let index in this.canvas6Json) {
            this.canvas6Json[index].count = this.canvas6JsonClone[index].count * this.getTime(parseInt(index));
           }
        }
        // 外圈闪烁效果
        if(this.drawCircleOutEndDeg = 365 * Math.PI / 180) {
            this.changeCircleOutInColor=!this.changeCircleOutInColor;
        }
        this.changeCircleOutInColor ? 
        this.circleOutWhite = 'blue' : 
        this.circleOutWhite = 'white';
        // 更新扇形外弧的结束角
        this.drawCircleOutEndDeg = 365 * Math.PI / 180 * this.getTime(4);
        // 动线跟踪
        if(this.canvas6Json){
            let allCount: number = 0;
            this.canvas6Json.forEach((e, i) => {
                allCount += e.count;
            })
            this.canvas6Json.forEach((e, i) => {
                let hypotenuse: number = this.circleR,
                angle: any = Math.PI / 180; 
                // 更新百分比数据
                this.canvas6Json[i].percent = this.toPercent(this.getTime(4) * (this.canvas6Json[i].count / allCount));
                if(i == 0) {
                    e.dyLineX = Math.cos(90 * Math.PI + this.drawHandle(i) / 2) * hypotenuse;
                    e.dyLineY = Math.sin(90 * Math.PI + this.drawHandle(i) / 2) * hypotenuse;
                }else{
                    // 计算动点的坐标
                    angle= 90 * Math.PI - (this.drawHandle(i - 1) - this.drawHandle(i)) / 2 + this.drawHandle(i - 1);
                    this.canvas6Json[i].dyLineX = Math.cos(angle) * hypotenuse;
                    this.canvas6Json[i].dyLineY = Math.sin(angle) * hypotenuse;
                }
            })
        }
        
    }
    
    /**
     * 动态渲染
     */
    protected render(): void {
        if(this.clearAll()) {
            this.drawSector();
            this.drawCircleOut();
            // 动态数据渲染
            if(this.canvas6Json) {
                this.canvas6Json.forEach(e => {
                    this.drawPercentage(e.countX, e.countY, e.percent, e.name, Math.ceil(e.count), e.dyLineX, e.dyLineY, e.color);
                });
            }
            
        }
        
    }

    /**
     * 渲染静态
     */
    protected staticInit(): void {
        let ctx: CanvasRenderingContext2D | null = this.context;
        if(ctx){
            // 擦除
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
            ctx.fillText('6', 40, 50);
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "25px Arial";
            ctx.fillStyle = 'blue';
            ctx.fillText('工艺占比', 115, 50);
            ctx.closePath();
            // 改变图原点参照位置

            ctx.translate(this.node.width / 2, this.node.height / 2);
             
        }
    }

    /**
     * 整理圆的终点角度
     */
    protected drawHandle(num): number {
        let countAll: number = 0;
        this.canvas6Json.forEach((ele, index)=> {
            countAll += ele.count;
        });
        let count: number = 0;
        this.canvas6Json.forEach((element, index) => {
            if(index <= num){
                count += element.count;
            }
        });
        return (count / countAll * 360) * Math.PI / 180;
    }

    /**
     * 画主圆
     */
    protected drawSector(): void {
            let ctx: CanvasRenderingContext2D | null = this.context;
            // 静态模拟画圆
            if(ctx && this.canvas6Json){
                ctx.save();
                this.canvas6Json.forEach((ele, index)=> {
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    if(index == 0) {
                        ctx.arc(0, 0, this.circleR, 0, this.drawHandle(index));
                    }else {
                        ctx.arc(0, 0, this.circleR, this.drawHandle(index-1), this.drawHandle(index));
                    }
                    ctx.fillStyle = ele.color;
                    ctx.fill();
                    ctx.closePath();
                });
            }
    }
    
    /**
     * 清除画布
     */
    protected drawPercentage(x:number, y:number, e: any, name: string, count: number, dx, dy, fontColor): void {
        let ctx: CanvasRenderingContext2D | null = this.context;
        if(ctx) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.font = "35px Arial";
            ctx.textAlign = 'left';
            ctx.strokeStyle = fontColor;
            ctx.strokeText(e + '', x, y);
            ctx.closePath();

            ctx.beginPath();
            if(y < 0) {
                ctx.moveTo(x + 50, y + 10);
                ctx.lineTo(x + 50, y + 100);
            }else{
                ctx.moveTo(x + 50, y - 40);
                ctx.lineTo(x + 50, y - 120);
            }
            ctx.lineTo(dx, dy);
            ctx.strokeStyle = fontColor;
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath();
            ctx.font = "25px Arial";
            ctx.textAlign = 'right';
            ctx.strokeStyle = 'white';
            if(y < 0) {
                ctx.strokeText(name, x + 30, y + 60);
                ctx.strokeText(count + '', x + 130, y + 60);
            }else{
                ctx.strokeText(name, x + 30, y - 60);
                ctx.strokeText(count + '', x + 130, y - 60);
            }
            ctx.closePath();
            
        }
    }

    /**
     * 画图像外围圈
     */
    protected drawCircleOut(): void{
        let ctx: CanvasRenderingContext2D | null = this.context;
        if(ctx && this.circleR) {
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
    }

    protected clearAll() {
        let ctx: CanvasRenderingContext2D | null = this.context;
        if(ctx) {
            ctx.beginPath();
            ctx.clearRect(-400, -200, 1000, 1000);
            ctx.closePath();
            return true;
        }
    }

    private toPercent(num: number) {
            return (num * 100).toFixed(2) + '%';
    }
}