"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snow = void 0;
var react_1 = __importDefault(require("react"));
require("./index.scss");
exports.Snow = function () {
    var snowSize = [];
    for (var i = 0; i < 200; i++) {
        snowSize.push(i);
    }
    var snowRender = snowSize.map(function (item) { return (react_1.default.createElement("div", { key: item, className: "snow" })); });
    return react_1.default.createElement("div", { className: "snow-container" }, snowRender);
};
//# sourceMappingURL=index.js.map