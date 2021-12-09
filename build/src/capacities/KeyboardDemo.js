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
import { Panel, gravity, Color, LayoutSpec, vlayout, layoutConfig, modal, keyboard, text, input, InputType, Gravity, stack } from "doric";
import { title, label, colors } from "../PubTool";
function getInput(c) {
    const inputView = input(c);
    const isFocused = text({
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.JUST,
        },
        height: 50,
    });
    const inputed = text({
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.JUST,
        },
        height: 50,
    });
    inputView.onFocusChange = (onFocusChange) => {
        isFocused.text = onFocusChange ? `Focused` : `Unfocused`;
    };
    inputView.onTextChange = (text) => {
        inputed.text = `Inputed:${text}`;
    };
    return [inputView, isFocused, inputed];
}
let KeyboardDemo = class KeyboardDemo extends Panel {
    build(rootView) {
        var [inputView, ...otherView] = getInput({
            layoutConfig: {
                widthSpec: LayoutSpec.FIT,
                heightSpec: LayoutSpec.FIT,
            },
            hintText: "Please input something in one line",
            border: {
                width: 1,
                color: Color.GRAY,
            },
            multiline: false,
            textSize: 20,
            maxLength: 20,
            padding: { top: 10, bottom: 11 },
            inputType: InputType.Decimal,
            password: true,
        });
        let bottomView = label('Bottom View').apply({
            width: 200,
            height: 50,
            backgroundColor: colors[0],
            textSize: 30,
            textColor: Color.WHITE,
            layoutConfig: layoutConfig().just().configAlignment(new Gravity().bottom().centerX())
        });
        stack([
            vlayout([
                title("Keyboard Demo"),
                label('Subscribe').apply({
                    width: 200,
                    height: 50,
                    corners: 25,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        keyboard(this.context).subscribe(data => {
                            bottomView.translationY = -(data.bottomMargin + data.height);
                        }).then(e => {
                            modal(this.context).toast(`Keyboard Subscribe`);
                            this.subscribeId = e;
                        });
                    }
                }),
                label('Unsubscribe').apply({
                    width: 200,
                    height: 50,
                    corners: 25,
                    backgroundColor: colors[0],
                    textSize: 30,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => {
                        if (this.subscribeId) {
                            keyboard(this.context).unsubscribe(this.subscribeId).then(e => {
                                modal(this.context).toast(`Keyboard Unsubscribe`);
                                this.subscribeId = undefined;
                            });
                        }
                    }
                }),
                inputView,
                ...otherView,
                label('获取输入文本').apply({
                    width: 180,
                    height: 40,
                    corners: 20,
                    backgroundColor: colors[3],
                    textSize: 22,
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig().just(),
                    onClick: () => __awaiter(this, void 0, void 0, function* () {
                        var _a;
                        let inputT = inputView;
                        let text = (_a = yield inputT.getText(this.context)) !== null && _a !== void 0 ? _a : '';
                        modal(this.context).toast(text);
                    })
                }),
            ]).apply({
                layoutConfig: layoutConfig().most(),
                gravity: gravity().centerX(),
                space: 10,
            }),
            bottomView,
        ]).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView);
    }
};
KeyboardDemo = __decorate([
    Entry
], KeyboardDemo);
export { KeyboardDemo };
//# sourceMappingURL=KeyboardDemo.js.map