var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Color, createRef, Gravity, gravity, HLayout, jsx, layoutConfig, log, modal, network, Panel, Scroller, Stack, Text, VLayout } from "doric";
import * as PubTool from "../PubTool";
let NetworkDemo = class NetworkDemo extends Panel {
    build(rootView) {
        const padding = 15;
        const resGetText = createRef();
        const resPostText = createRef();
        const resRequestText = createRef();
        jsx.createElement(Scroller, { parent: rootView, layoutConfig: layoutConfig().most() },
            jsx.createElement(VLayout, { layoutConfig: layoutConfig().mostWidth().fitHeight(), space: 15 },
                jsx.createElement(Text, { layoutConfig: layoutConfig().fit().configMargin({ left: padding, top: 2 * padding }), textSize: 20, fontStyle: 'bold', textColor: PubTool.themColor }, "\u7F51\u7EDC\u8BF7\u6C42"),
                jsx.createElement(HLayout, { layoutConfig: layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: Gravity.CenterY },
                    jsx.createElement(Stack, { layoutConfig: layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: PubTool.themColor }),
                    jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: Color.BLACK }, "GET\u8BF7\u6C42")),
                jsx.createElement(Stack, { layoutConfig: layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: PubTool.bgColor, height: 280 },
                    jsx.createElement(VLayout, { layoutConfig: layoutConfig().most(), space: 10 },
                        jsx.createElement(Text, { fontStyle: "bold" }, "response:"),
                        jsx.createElement(Scroller, { layoutConfig: layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), ref: resGetText, maxLines: 0, textSize: 13 })),
                        jsx.createElement(Text, { width: 100, height: 38, corners: 19, textColor: Color.WHITE, layoutConfig: layoutConfig().just().configAlignment(gravity().bottom().center()), backgroundColor: PubTool.themColor, onClick: () => {
                                modal(this.context).toast('请求中...', Gravity.Center);
                                network(this.context).get('https://www.dmoe.cc/random.php?return=json').then(res => {
                                    log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resGetText.current.text = jsonStr;
                                    modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42"))),
                jsx.createElement(HLayout, { layoutConfig: layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: Gravity.CenterY },
                    jsx.createElement(Stack, { layoutConfig: layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: PubTool.themColor }),
                    jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: Color.BLACK }, "POST\u8BF7\u6C42")),
                jsx.createElement(Stack, { layoutConfig: layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: PubTool.bgColor, height: 280 },
                    jsx.createElement(VLayout, { layoutConfig: layoutConfig().most(), space: 10 },
                        jsx.createElement(Text, { fontStyle: "bold" }, "response:"),
                        jsx.createElement(Scroller, { layoutConfig: layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), ref: resPostText, maxLines: 0, textSize: 13 })),
                        jsx.createElement(Text, { width: 100, height: 38, corners: 19, textColor: Color.WHITE, layoutConfig: layoutConfig().just().configAlignment(gravity().bottom().center()), backgroundColor: PubTool.themColor, onClick: () => {
                                modal(this.context).toast('请求中...', Gravity.Center);
                                const data = 'start=1&num=1';
                                network(this.context).post('http://baobab.kaiyanapp.com/api/v4/discovery/hot', data).then(res => {
                                    log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resPostText.current.text = jsonStr;
                                    modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42"))),
                jsx.createElement(HLayout, { layoutConfig: layoutConfig().fit().configMargin({ left: padding, top: padding }), space: 10, gravity: Gravity.CenterY },
                    jsx.createElement(Stack, { layoutConfig: layoutConfig().just(), height: 12, width: 12, corners: 6, backgroundColor: PubTool.themColor }),
                    jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), textSize: 16, fontStyle: 'bold', textColor: Color.BLACK }, "\u901A\u7528request\u8BF7\u6C42")),
                jsx.createElement(Stack, { layoutConfig: layoutConfig().mostWidth().justHeight().configMargin({ left: padding, right: padding }), padding: { top: padding, left: padding, bottom: padding, right: padding }, backgroundColor: PubTool.bgColor, height: 280 },
                    jsx.createElement(VLayout, { layoutConfig: layoutConfig().most(), space: 10 },
                        jsx.createElement(Text, { fontStyle: "bold" }, "response:"),
                        jsx.createElement(Scroller, { layoutConfig: layoutConfig().mostWidth().fitHeight().configWeight(1) },
                            jsx.createElement(Text, { layoutConfig: layoutConfig().fit(), ref: resRequestText, maxLines: 0, textSize: 13 })),
                        jsx.createElement(Text, { width: 100, height: 38, corners: 19, textColor: Color.WHITE, layoutConfig: layoutConfig().just().configAlignment(gravity().bottom().center()), backgroundColor: PubTool.themColor, onClick: () => {
                                modal(this.context).toast('请求中...', Gravity.Center);
                                var r = {
                                    url: 'http://baobab.kaiyanapp.com/api/v4/discovery/hot',
                                    method: 'post',
                                    data: 'start=1&num=1'
                                };
                                network(this.context).request(r).then(res => {
                                    log(`Response : ${res.data}`);
                                    const jsonStr = JSON.stringify(res);
                                    resRequestText.current.text = jsonStr;
                                    modal(this.context).alert(jsonStr);
                                }).catch(e => {
                                    modal(this.context).toast('Catched:' + JSON.stringify(e));
                                });
                            } }, " \u53D1\u8D77\u8BF7\u6C42")))));
    }
};
NetworkDemo = __decorate([
    Entry
], NetworkDemo);
export { NetworkDemo };
//# sourceMappingURL=NetworkDemo.js.map