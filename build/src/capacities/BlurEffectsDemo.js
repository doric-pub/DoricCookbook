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
import { VLayout, Panel, jsx, layoutConfig, BlurEffect, Image, Text, createRef, Stack, Color, GestureContainer, Scroller, Gravity, HLayout, } from "doric";
import { colors } from "./utils";
let BlurEffectsDemo = class BlurEffectsDemo extends Panel {
    build(root) {
        root.backgroundColor = Color.WHITE;
        const blurEffectRef = createRef();
        const gestureRef = createRef();
        jsx.createElement(Scroller, { parent: root, layoutConfig: layoutConfig().most() },
            jsx.createElement(VLayout, { layoutConfig: layoutConfig().mostWidth().fitHeight() },
                jsx.createElement(BlurEffect, { layoutConfig: layoutConfig().mostWidth().fitHeight(), radius: 20, ref: blurEffectRef, effectiveRect: {
                        x: 50,
                        y: 50,
                        width: 200,
                        height: 200,
                    } },
                    jsx.createElement(GestureContainer, { ref: gestureRef, layoutConfig: layoutConfig().mostWidth().fitHeight() },
                        jsx.createElement(VLayout, { space: 20, padding: { left: 5, right: 5 } },
                            jsx.createElement(Image, { imageUrl: "https://doric.pub/about/The_Parthenon_in_Athens.jpg" }),
                            jsx.createElement(HLayout, { space: 10 },
                                jsx.createElement(Image, { imageUrl: "https://doric.pub/logo.png" }),
                                jsx.createElement(Text, { layoutConfig: layoutConfig().mostWidth().fitHeight(), maxLines: -1, textAlignment: Gravity.Left }, "\u5E0C\u814A\u5E15\u7279\u519C\u795E\u5E99\u5386\u7ECF\u6570\u5343\u5E74\u98CE\u96E8\u4FB5\u8680\uFF0C\u65E9\u5DF2\u65AD\u5899\u6B8B\u57A3\u3002\u7136\u800C\u90A3\u4E9B\u5ECA\u67F1\u5C79\u7ACB\u5343\u5E74\uFF0C\u4ECD\u7136\u575A\u56FA\u5DCD\u7136\u3002 \u8FD9\u79CD\u5ECA\u67F1\u6837\u5F0F\u53EB\u505A Doric\uFF0C\u5373\u6211\u4EEC\u8FD9\u4E2A\u9879\u76EE\u7684\u540D\u79F0\u7531\u6765\u3002 \u6B63\u5982Doric\u6837\u5F0F\u7684\u5ECA\u67F1\u6491\u8D77\u4E86\u795E\u5E99\u7684\u5343\u5E74\u98CE\u96E8\uFF0C\u6211\u4EEC\u4E5F\u5E0C\u671BDoric\u9879\u76EE\u80FD\u591F\u4F5C\u4E3A\u524D\u7AEF\u9875\u9762\u7684\u652F\u67F1\uFF0C\u7B80\u6D01\uFF0C\u53EF\u9760\u3002 \u76EE\u524DDoric\u6B63\u5728\u6301\u7EED\u8FED\u4EE3\u4E2D\u3002\u5982\u679C\u60A8\u5BF9Doric\u9879\u76EE\u611F\u5174\u8DA3\uFF0C\u6B22\u8FCE\u52A0\u5165\u6211\u4EEC\u3002"))))),
                jsx.createElement(VLayout, { layoutConfig: layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = createRef();
                    const spinnerRef = createRef();
                    const containerRef = createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = 25;
                        spinnerRef.current.width =
                            ((blurEffectRef.current.radius || 0) * width) / maxValue;
                        labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.radius = Math.round((event.x / width) * maxValue);
                            labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.radius = Math.round((event.x / width) * maxValue);
                            labelRef.current.text = `Blur radius: ${blurEffectRef.current.radius}`;
                        });
                    }));
                    return (jsx.createElement(jsx.Fragment, null,
                        jsx.createElement(Text, { textSize: 20, ref: labelRef }, "Blur radius:\\t"),
                        jsx.createElement(GestureContainer, { layoutConfig: layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors[4],
                            } },
                            jsx.createElement(Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: layoutConfig().justWidth().justHeight(), height: 40 }))));
                })()),
                jsx.createElement(VLayout, { layoutConfig: layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = createRef();
                    const spinnerRef = createRef();
                    const containerRef = createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b;
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = yield blurEffectRef.current.getWidth(this.context);
                        spinnerRef.current.width =
                            ((((_a = blurEffectRef.current.effectiveRect) === null || _a === void 0 ? void 0 : _a.width) || 0) * width) /
                                maxValue;
                        labelRef.current.text = `Effective Width: ${(_b = blurEffectRef.current.effectiveRect) === null || _b === void 0 ? void 0 : _b.width}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _c;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { width: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Width: ${(_c = blurEffectRef.current.effectiveRect) === null || _c === void 0 ? void 0 : _c.width}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _d;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { width: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Width: ${(_d = blurEffectRef.current.effectiveRect) === null || _d === void 0 ? void 0 : _d.width}`;
                        });
                    }));
                    return (jsx.createElement(jsx.Fragment, null,
                        jsx.createElement(Text, { textSize: 20, ref: labelRef }),
                        jsx.createElement(GestureContainer, { layoutConfig: layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors[4],
                            } },
                            jsx.createElement(Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: layoutConfig().justWidth().justHeight(), height: 40 }))));
                })()),
                jsx.createElement(VLayout, { layoutConfig: layoutConfig()
                        .mostWidth()
                        .fitHeight()
                        .configMargin({ top: 20 }), space: 5, padding: { left: 10, right: 10 } }, (() => {
                    const labelRef = createRef();
                    const spinnerRef = createRef();
                    const containerRef = createRef();
                    this.addOnRenderFinishedCallback(() => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b;
                        const width = yield containerRef.current.getWidth(this.context);
                        const maxValue = yield blurEffectRef.current.getHeight(this.context);
                        spinnerRef.current.width =
                            ((((_a = blurEffectRef.current.effectiveRect) === null || _a === void 0 ? void 0 : _a.height) || 0) * width) /
                                maxValue;
                        labelRef.current.text = `Effective Height: ${(_b = blurEffectRef.current.effectiveRect) === null || _b === void 0 ? void 0 : _b.height}`;
                        containerRef.current.onTouchDown = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _c;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { height: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Height: ${(_c = blurEffectRef.current.effectiveRect) === null || _c === void 0 ? void 0 : _c.height}`;
                        });
                        containerRef.current.onTouchMove = (event) => __awaiter(this, void 0, void 0, function* () {
                            var _d;
                            spinnerRef.current.width = event.x;
                            blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { height: Math.floor((event.x / width) * maxValue) });
                            labelRef.current.text = `Effective Height: ${(_d = blurEffectRef.current.effectiveRect) === null || _d === void 0 ? void 0 : _d.height}`;
                        });
                    }));
                    return (jsx.createElement(jsx.Fragment, null,
                        jsx.createElement(Text, { textSize: 20, ref: labelRef }),
                        jsx.createElement(GestureContainer, { layoutConfig: layoutConfig().mostWidth().fitHeight(), ref: containerRef, border: {
                                width: 1,
                                color: colors[4],
                            } },
                            jsx.createElement(Stack, { ref: spinnerRef, backgroundColor: colors[6], layoutConfig: layoutConfig().justWidth().justHeight(), height: 40 }))));
                })())));
        this.addOnRenderFinishedCallback(() => {
            let x = 0, y = 0, posX = 0, posY = 0;
            gestureRef.current.onTouchDown = (event) => {
                const rect = blurEffectRef.current.effectiveRect || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                };
                if (event.x >= rect.x &&
                    event.x <= rect.x + rect.width &&
                    event.y >= rect.y &&
                    event.y <= rect.y + rect.height) {
                    x = event.x;
                    y = event.y;
                    posX = rect.x;
                    posY = rect.y;
                }
                else {
                    x = -1;
                }
            };
            gestureRef.current.onTouchMove = (event) => {
                if (x >= 0) {
                    blurEffectRef.current.effectiveRect = Object.assign(Object.assign({}, blurEffectRef.current.effectiveRect), { x: posX + (event.x - x), y: posY + (event.y - y) });
                }
            };
        });
    }
};
BlurEffectsDemo = __decorate([
    Entry
], BlurEffectsDemo);
export { BlurEffectsDemo };
//# sourceMappingURL=BlurEffectsDemo.js.map