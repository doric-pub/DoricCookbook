var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Stack, ViewComponent } from "doric";
import * as PubTool from "./PubTool";
let Container = class Container extends Stack {
    constructor() {
        super();
    }
    apply(config) {
        let t = super.apply(config);
        let child = config.child;
        if (child) {
            t.addChild(child);
        }
        if (config.isRandomColor) {
            t.backgroundColor = PubTool.randomColor();
        }
        return t;
    }
};
Container = __decorate([
    ViewComponent,
    __metadata("design:paramtypes", [])
], Container);
export { Container };
export function container(config) {
    const ret = new Container;
    if (config) {
        ret.apply(config);
    }
    return ret;
}
//# sourceMappingURL=Container.js.map