import { Group, Panel, gravity, Color, LayoutSpec, vlayout, layoutConfig, modal, keyboard, text, input, Input, InputType, Gravity, stack } from "doric";
import { title, label, colors } from "../PubTool";

function getInput(c: Partial<Input>) {
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

@Entry
export class KeyboardDemo extends Panel {
    subscribeId?: string
    build(rootView: Group): void {
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
        })

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
                            bottomView.translationY = - (data.bottomMargin + data.height)
                        }).then(e => {
                            modal(this.context).toast(`Keyboard Subscribe`)
                            this.subscribeId = e
                        })
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
                                modal(this.context).toast(`Keyboard Unsubscribe`)
                                this.subscribeId = undefined
                            })
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
                    onClick: async () => {
                        let inputT = inputView as Input
                        let text = await inputT.getText(this.context) ?? ''
                        modal(this.context).toast(text)
                    }
                }),
            ]).apply({
                layoutConfig: layoutConfig().most(),
                gravity: gravity().centerX(),
                space: 10,
            }),
            bottomView,
        ]).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}