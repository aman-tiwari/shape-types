"use strict";
exports.__esModule = true;
var val_99 = [0, 0, 9, 9];
function inc(x) {
    return undefined;
}
var val_100 = inc([0, 1, 0, 0]);
var Tensor = /** @class */ (function () {
    function Tensor() {
        var shape = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shape[_i] = arguments[_i];
        }
    }
    return Tensor;
}());
function dim(x) {
    return x;
}
var shape = tuple;
var p = shape(1, 2, 3);
var x = new (Tensor.bind.apply(Tensor, [void 0].concat(shape(1, 2))))();
function square(x) {
    return x;
}
var x2 = square(x);
function bigger(x) {
    return x;
}
var y = bigger(x);
var rank3 = new Tensor(dim(5), dim(5), dim(10));
var breaks = bigger(rank3);
var add = function (x, y) { return x + y; };
var Ops;
(function (Ops) {
    Ops["add"] = "add";
})(Ops || (Ops = {}));
(function (Ops) {
    Ops["three"] = "three";
})(Ops || (Ops = {}));
function tuple() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
exports.tuple = tuple;
