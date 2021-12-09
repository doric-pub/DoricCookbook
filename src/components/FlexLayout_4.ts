
import { Align, Color, FlexDirection, flexlayout, Gravity, Justify, layoutConfig, stack, text, View, vlayout, Wrap } from "doric"
import * as PubTool from "../PubTool"

function createBoxes() {
    var boxes: View[] = []
    for (let index = 0; index < 10; index++) {
        boxes.push(
            text({
                text: `${index+1}`,
                height: 30,
                width: 30 + Math.floor(Math.random() * 50),
                layoutConfig: layoutConfig().just(),
                backgroundColor: PubTool.colors[index % PubTool.colors.length]
            }),
        )
    }
    return boxes
}

function exampleUI(flexWrap: Wrap, boxes: View[]) {
    var desc
    switch (flexWrap) {
        case Wrap.NO_WRAP: desc = 'NO_WRAP'; break;
        case Wrap.WRAP: desc = 'WRAP'; break;
        case Wrap.WRAP_REVERSE: desc = 'WRAP_REVERSE'; break;
        default: desc = ''
    }
    return vlayout([
        text({
            text: `${desc}:`,
            textSize: 12,
            textColor: Color.safeParse('#666666'),
            layoutConfig: layoutConfig().fit(),
        }),
        flexlayout(boxes, {
            flexConfig: {
                flexDirection: FlexDirection.ROW,
                justifyContent: Justify.FLEX_START,
                flexWrap: flexWrap,
            },
            backgroundColor: PubTool.bgColor,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            height: 160,
            width: 240,
            border: {
                width: 0.5,
                color: Color.safeParse('#666666')
            },
        }),
    ], {
        space: 5,
        layoutConfig: layoutConfig().fit()
    })
}

/// Flex Box布局
export function ui() {
    let boxes = createBoxes()
    return stack(
        [
            vlayout([
                exampleUI(Wrap.NO_WRAP, boxes),
                exampleUI(Wrap.WRAP, boxes),
                exampleUI(Wrap.WRAP_REVERSE, boxes),
            ], {
                space: 20,
                layoutConfig: layoutConfig().fit().configMargin({ top: 5 })
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: Color.WHITE,
        }
    )
}

export function codeString() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 10; index++) {
            boxes.push(
                text({
                    text: \`\${index+1}\`,
                    height: 30,
                    width: 30 + Math.floor(Math.random() * 50),
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(flexWrap: Wrap, boxes: View[]) {
        var desc
        switch (flexWrap) {
            case Wrap.NO_WRAP: desc = 'NO_WRAP'; break;
            case Wrap.WRAP: desc = 'WRAP'; break;
            case Wrap.WRAP_REVERSE: desc = 'WRAP_REVERSE'; break;
            default: desc = ''
        }
        return vlayout([
            text({
                text: \`\${desc}:\`,
                textSize: 12,
                textColor: Color.safeParse('#666666'),
                layoutConfig: layoutConfig().fit(),
            }),
            flexlayout(boxes, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.FLEX_START,
                    flexWrap: flexWrap,
                },
                backgroundColor: PubTool.bgColor,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                height: 160,
                width: 240,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().fit()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Wrap.NO_WRAP, boxes),
                    exampleUI(Wrap.WRAP, boxes),
                    exampleUI(Wrap.WRAP_REVERSE, boxes),
                ], {
                    space: 20,
                    layoutConfig: layoutConfig().fit().configMargin({ top: 5 })
                })
            ],
            {
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                backgroundColor: Color.WHITE,
            }
        )
    }
    `
}