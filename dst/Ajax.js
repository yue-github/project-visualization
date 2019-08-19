define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Ajax = /** @class */ (function () {
        function Ajax() {
        }
        /**
         * 封装自己的ajax函数
         * @param method(必选)    请求类型  get 和 post
         * @param url(必选)       请求的url地址   相同域名下的页面（此函数不支持跨域请求）
         * @param data(必选)      请求协带的数据  以js对象的形式定义，如：{name:'张三'}
         * @param callback(必选)  回调函数,可接收一个参数，这个参数就是服务器响应的数据
         * @param dataType(可选)      指定服务器响应的数据类型（可选值：json,xml,text），如果是json模式，则使用json解析数据，默认为text普通字符串
         */
        Ajax.prototype.isAjax = function (method, url, data, dataType) {
            var result = "";
            var xhr = new XMLHttpRequest();
            if (xhr == null) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if (xhr != null) {
                xhr.open(method, url, true);
                xhr.send(data);
                xhr.onreadystatechange = function () {
                    console.log(xhr.statusText);
                    var data = xhr.responseText;
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        if (dataType == 'json') {
                            result = JSON.parse(data);
                        }
                        else {
                            result = data;
                        }
                    }
                    else {
                        result = data;
                    }
                };
            }
            else {
                result = "Your browser does not support XMLHTTP.";
            }
            console.log(result);
            return result;
        };
        return Ajax;
    }());
    exports.Ajax = Ajax;
});
