export class Easing {
    
    private static funcs: any = {
        "linear": Easing.linear,
        "quadraticIn": Easing.quadraticIn,
        "quadraticOut": Easing.quadraticOut,
        "quadraticInOut": Easing.quadraticInOut,
        "cubicIn": Easing.cubicIn,
        "cubicOut": Easing.cubicOut,
        "cubicInOut": Easing.cubicInOut,
        "quarticIn": Easing.quarticIn,
        "quarticOut": Easing.quarticOut,
        "quarticInOut": Easing.quarticInOut,
        "quinticIn": Easing.quinticIn,
        "quinticOut": Easing.quinticOut,
        "quinticInOut": Easing.quinticInOut,
        "sinIn": Easing.sinIn,
        "sinOut": Easing.sinOut,
        "sinInOut": Easing.sinInOut,
        "exponentialIn": Easing.exponentialIn,
        "exponentialOut": Easing.exponentialOut,
        "exponentialInOut": Easing.exponentialInOut,
        "circularIn": Easing.circularIn,
        "circularOut": Easing.circularOut,
        "circularInOut": Easing.circularInOut,
        "elasticIn": Easing.elasticIn,
        "elasticOut": Easing.elasticOut,
        "elasticInOut": Easing.elasticInOut,
        "backIn": Easing.backIn,
        "backOut": Easing.backOut,
        "backInOut": Easing.backInOut,
        "bounceIn": Easing.bounceIn,
        "boundOut": Easing.bounceOut,
        "boundInOut": Easing.bounceInOut
    }

    public static find(name: string): (number)=>number {
        if (Easing.funcs.hasOwnProperty(name))
            return Easing.funcs[name];
        return Easing.linear;
    }

    public static linear(k: number): number {
        return k;
    }
    
    public static quadraticIn(k: number): number {
        return k * k;
    }
    
    public static quadraticOut(k: number): number {
        return k * (2 - k);
    }
    
    public static quadraticInOut(k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k;
        }
        return - 0.5 * (--k * (k - 2) - 1);
    }
    
    public static cubicIn(k: number): number {
        return k * k * k;
    }
    
    public static cubicOut(k: number): number {
        return --k * k * k + 1;
    }
    
    public static cubicInOut(k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k + 2);
    }

    public static quarticIn(k: number): number {
        return k * k * k * k;
    }
    
    public static quarticOut(k: number): number {
        return 1 - (--k * k * k * k);
    }
    
    public static quarticInOut(k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k;
        }
        return - 0.5 * ((k -= 2) * k * k * k - 2);
    }
    
    public static quinticIn(k: number): number {
        return k * k * k * k * k;
    }
    
    public static quinticOut(k: number): number {
        return --k * k * k * k * k + 1;
    }
    
    public static quinticInOut(k: number): number {
        if ((k *= 2) < 1) {
            return 0.5 * k * k * k * k * k;
        }
        return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }
    
    public static sinIn(k: number): number {
        return 1 - Math.cos(k * Math.PI / 2);
    }
    
    public static sinOut(k: number): number {
        return Math.sin(k * Math.PI / 2);
    }
    
    public static sinInOut(k: number): number {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
    
    public static exponentialIn(k: number): number {
        return k === 0 ? 0 : Math.pow(1024, k - 1);
    }
    
    public static exponentialOut(k: number): number {
        return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
    }
    
    public static exponentialInOut(k: number): number {
        if (k === 0) return 0;
        if (k === 1) return 1;
        if ((k *= 2) < 1) {
            return 0.5 * Math.pow(1024, k - 1);
        }
        return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
    }
    
    public static circularIn(k: number): number {
        return 1 - Math.sqrt(1 - k * k);
    }

    public static circularOut(k: number): number {
        return Math.sqrt(1 - (--k * k));
    }
    
    public static circularInOut(k: number): number {
        if ((k *= 2) < 1) {
            return - 0.5 * (Math.sqrt(1 - k * k) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }
    
    public static elasticIn(k: number): number {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    }
    
    public static elasticOut(k: number): number {
        if (k === 0) return 0;
        if (k === 1) return 1;
        return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    }
    
    public static elasticInOut(k: number): number {
        if (k === 0) return 0;
        if (k === 1) return 1;
        k *= 2;
        if (k < 1) {
            return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
        }
        return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }
    
    public static backIn(k: number): number {
        var s = 1.70158;
        return k * k * ((s + 1) * k - s);
    }
    
    public static backOut(k: number): number {
        var s = 1.70158;
        return --k * k * ((s + 1) * k + s) + 1;
    }
    
    public static backInOut(k: number): number {
        var s = 1.70158 * 1.525;
        if ((k *= 2) < 1) {
            return 0.5 * (k * k * ((s + 1) * k - s));
        }
        return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
    
    public static bounceIn(k: number): number {
        return 1 - Easing.bounceOut(1 - k);
    }
    
    public static bounceOut(k: number): number {
        if (k < (1 / 2.75)) {
            return 7.5625 * k * k;
        } else if (k < (2 / 2.75)) {
            return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
        } else if (k < (2.5 / 2.75)) {
            return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
        } else {
            return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
        }
    }
    
    public static bounceInOut(k: number): number {
        if (k < 0.5) {
            return Easing.bounceIn(k * 2) * 0.5;
        }
        return Easing.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    }
}