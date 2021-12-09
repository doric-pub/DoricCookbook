
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

function exampleUI(alignContent: Align, boxes: View[]) {
    var desc
    switch (alignContent) {
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
                flexWrap: Wrap.WRAP,
                justifyContent: Justify.FLEX_START,
                alignContent: alignContent,
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
                exampleUI(Align.AUTO, boxes),
                exampleUI(Align.FLEX_START, boxes),
                exampleUI(Align.CENTER, boxes),
                exampleUI(Align.FLEX_END, boxes),
                exampleUI(Align.STRETCH, boxes),
                exampleUI(Align.BASELINE, boxes),
                exampleUI(Align.SPACE_BETWEEN, boxes),
                exampleUI(Align.SPACE_AROUND, boxes),
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
    
    function exampleUI(alignContent: Align, boxes: View[]) {
        var desc
        switch (alignContent) {
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
                    flexWrap: Wrap.WRAP,
                    justifyContent: Justify.FLEX_START,
                    alignContent: alignContent,
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
                    exampleUI(Align.AUTO, boxes),
                    exampleUI(Align.FLEX_START, boxes),
                    exampleUI(Align.CENTER, boxes),
                    exampleUI(Align.FLEX_END, boxes),
                    exampleUI(Align.STRETCH, boxes),
                    exampleUI(Align.BASELINE, boxes),
                    exampleUI(Align.SPACE_BETWEEN, boxes),
                    exampleUI(Align.SPACE_AROUND, boxes),
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