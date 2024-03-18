"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        this._items.push(item);
    };
    Cart.prototype.delete = function (id) {
        this._items.splice(this._items.findIndex(function (i) { return i.id === id; }), 1);
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.total = function () {
        return this._items.reduce(function (acc, i) { return acc + i.price; }, 0);
    };
    Cart.prototype.totalWithDiscount = function (discount) {
        return (this._items.reduce(function (acc, i) { return acc + i.price; }, 0)) * (1 - discount / 100);
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map