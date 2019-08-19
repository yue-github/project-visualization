define(["require", "exports", "./component1", "./component2", "./component3", "./component4", "./component5", "./component6", "./staticcom", "./dynamiccom"], function (require, exports, component1_1, component2_1, component3_1, component4_1, component5_1, component6_1, staticcom_1, dynamiccom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var comp1 = new component1_1.Component1("canvas1");
    var comp2 = new component2_1.Component2("canvas2");
    var comp3 = new component3_1.Component3("canvas3");
    var comp4 = new component4_1.Component4("canvas4");
    var comp5 = new component5_1.Component5("canvas5");
    var comp6 = new component6_1.Component6("canvas6");
    var debug = true;
    var com;
    if (debug)
        com = new staticcom_1.StaticCom();
    else
        com = new dynamiccom_1.DynamicCom();
    var ret = com.func1(null);
    comp1.setTarget(ret);
    ret = com.func2(null);
    comp2.setTarget(ret);
    ret = com.func3(null);
    comp3.setTarget(ret);
    ret = com.func4(null);
    comp4.setTarget(ret);
    ret = com.func5(null);
    comp5.setTarget(ret);
    ret = com.func6(null);
    comp6.setTarget(ret);
    setInterval(function () {
        var ret = com.func1(null);
        comp1.setTarget(ret);
        ret = com.func2(null);
        comp2.setTarget(ret);
        ret = com.func3(null);
        comp3.setTarget(ret);
        ret = com.func4(null);
        comp4.setTarget(ret);
        ret = com.func5(null);
        comp5.setTarget(ret);
        ret = com.func6(null);
        comp6.setTarget(ret);
    }, 6000);
});
