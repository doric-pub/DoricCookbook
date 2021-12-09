var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Panel, jsx, VLayout, layoutConfig, Image, createRef, Gravity, ScaleType, Color, Text, modal, } from "doric";
import * as PubTool from "../PubTool";
let AnimatedImageDemo = class AnimatedImageDemo extends Panel {
    build(root) {
        const imageRef = createRef();
        jsx.createElement(VLayout, { parent: root, layoutConfig: layoutConfig().most(), gravity: Gravity.Center, space: 20 },
            jsx.createElement(Image, { scaleType: ScaleType.ScaleToFill, ref: imageRef, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png" }),
            jsx.createElement(Text, { textSize: 20, backgroundColor: PubTool.colors[0], textColor: Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => __awaiter(this, void 0, void 0, function* () {
                    const isAnimating = yield imageRef.current.isAnimating(this.context);
                    modal(this.context).alert(`Is Animating: ${isAnimating}`);
                }) }, "isAnimating"),
            jsx.createElement(Text, { textSize: 20, backgroundColor: PubTool.colors[0], textColor: Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.startAnimating(this.context);
                } }, "startAnimating"),
            jsx.createElement(Text, { textSize: 20, backgroundColor: PubTool.colors[0], textColor: Color.WHITE, padding: { left: 10, top: 10, right: 10, bottom: 10 }, onClick: () => {
                    imageRef.current.stopAnimating(this.context);
                } }, "stopAnimating"));
    }
};
AnimatedImageDemo = __decorate([
    Entry
], AnimatedImageDemo);
export { AnimatedImageDemo };
//# sourceMappingURL=AnimatedImageDemo.js.map