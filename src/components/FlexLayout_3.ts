
import { Align, Color, FlexDirection, flexlayout, Gravity, Justify, layoutConfig, stack, text, View, vlayout } from "doric"
import * as PubTool from "../PubTool"

function createBoxes() {
    var boxes: View[] = []
    for (let index = 0; index < 4; index++) {
        boxes.push(
            text({
                height: 30 + Math.floor(Math.random() * 40),
                width: 50,
                layoutConfig: layoutConfig().just(),
                backgroundColor: PubTool.colors[index % PubTool.colors.length]
            }),
        )
    }
    return boxes
}

function exampleUI(alignItems: Align, boxes: View[]) {
    var desc
    switch (alignItems) {
        case Align.AUTO: desc = 'AUTO'; break;
        case Align.FLEX_START: desc = 'FLEX_START'; break;
        case Align.CENTER: desc = 'CENTER'; break;
        case Align.FLEX_END: desc = 'FLEX_END'; break;
        case Align.STRETCH: desc = 'STRETCH'; break;
        case Align.BASELINE: desc = 'BASELINE'; break;
        case Align.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
        case Align.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
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
                justifyContent: Justify.SPACE_BETWEEN,
                alignItems: alignItems
            },
            layoutConfig: layoutConfig().mostWidth().justHeight(),
            height: 90,
            border: {
                width: 0.5,
                color: Color.safeParse('#666666')
            },
        }),
    ], {
        space: 5,
        layoutConfig: layoutConfig().mostWidth().fitHeight()
    })
}

/// Flex Box布局
export function ui() {
    let boxes = createBoxes()
    return stack(
        [
            vlayout([
                exampleUI(Align.AUTO, boxes),
                exampleUI(Align.FLEX_START, boxes),
                exampleUI(Align.CENTER, boxes),
                exampleUI(Align.FLEX_END, boxes),
                exampleUI(Align.STRETCH, boxes),
                exampleUI(Align.BASELINE, boxes),
                exampleUI(Align.SPACE_BETWEEN, boxes),
                exampleUI(Align.SPACE_AROUND, boxes),
            ], {
                space: 15,
                layoutConfig: layoutConfig().most().configMargin({ top: 5 })
            })
        ],
        {
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {
    return `
    function createBoxes() {
        var boxes: View[] = []
        for (let index = 0; index < 4; index++) {
            boxes.push(
                text({
                    height: 30 + Math.floor(Math.random() * 40),
                    width: 50,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(alignItems: Align, boxes: View[]) {
        var desc
        switch (alignItems) {
            case Align.AUTO: desc = 'AUTO'; break;
            case Align.FLEX_START: desc = 'FLEX_START'; break;
            case Align.CENTER: desc = 'CENTER'; break;
            case Align.FLEX_END: desc = 'FLEX_END'; break;
            case Align.STRETCH: desc = 'STRETCH'; break;
            case Align.BASELINE: desc = 'BASELINE'; break;
            case Align.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
            case Align.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
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
                    justifyContent: Justify.SPACE_BETWEEN,
                    alignItems: alignItems
                },
                layoutConfig: layoutConfig().mostWidth().justHeight(),
                height: 90,
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 5,
            layoutConfig: layoutConfig().mostWidth().fitHeight()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(Align.AUTO, boxes),
                    exampleUI(Align.FLEX_START, boxes),
                    exampleUI(Align.CENTER, boxes),
                    exampleUI(Align.FLEX_END, boxes),
                    exampleUI(Align.STRETCH, boxes),
                    exampleUI(Align.BASELINE, boxes),
                    exampleUI(Align.SPACE_BETWEEN, boxes),
                    exampleUI(Align.SPACE_AROUND, boxes),
                ], {
                    space: 15,
                    layoutConfig: layoutConfig().most().configMargin({ top: 5 })
                })
            ],
            {
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}