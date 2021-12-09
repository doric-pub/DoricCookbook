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
import { Panel, flowlayout, layoutConfig, text, Color, LayoutSpec, Gravity, flowItem, log, } from "doric";
import * as PubTool from "../PubTool";
let FlowLayoutDemo = class FlowLayoutDemo extends Panel {
    build(rootView) {
        const flowView = flowlayout({
            layoutConfig: layoutConfig().most(),
            itemCount: 20,
            columnCount: 3,
            columnSpace: 10,
            rowSpace: 10,
            renderItem: (idx) => {
                return flowItem(text({
                    text: `${idx}`,
                    textColor: Color.BLACK,
                    textSize: 20,
                    layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                }), {
                    backgroundColor: PubTool.colors[idx % PubTool.colors.length],
                    height: 50 + (idx % 3) * 20,
                    layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
                    onClick: () => __awaiter(this, void 0, void 0, function* () {
                        const ret = yield flowView.findCompletelyVisibleItems(this.context);
                    }),
                }).also((it) => {
                    if (idx == 15) {
                        it.fullSpan = true;
                        it.identifier = "fullSpan";
                    }
                });
            },
            loadMore: true,
            onLoadMore: () => {
                setTimeout(() => {
                    flowView.itemCount += 20;
                }, 1000);
            },
            loadMoreView: flowItem(text({
                text: "load more",
                textColor: Color.WHITE,
                textSize: 20,
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            }), {
                backgroundColor: PubTool.colors[500 % PubTool.colors.length],
                height: 50,
                fullSpan: true,
                layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
            }),
            onScrollEnd: () => __awaiter(this, void 0, void 0, function* () {
                const ret = yield flowView.findCompletelyVisibleItems(this.context);
                log("completelyVisible Items is:", ret);
                const ret2 = yield flowView.findVisibleItems(this.context);
                log("visible Items is:", ret2);
            }),
        }).in(rootView);
    }
};
FlowLayoutDemo = __decorate([
    Entry
], FlowLayoutDemo);
export { FlowLayoutDemo };
//# sourceMappingURL=FlowLayoutDemo.js.map