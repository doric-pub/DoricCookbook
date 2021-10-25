
import { Color, FlexDirection, flexlayout, Gravity, Justify, layoutConfig, stack, text, View, vlayout } from "doric"
import * as PubTool from "../PubTool"

function createBoxes() {
    var boxes: View[] = []
    for (let index = 0; index < 3; index++) {
        boxes.push(
            text({
                height: 40,
                width: 40 + Math.floor(Math.random() * 40),
                layoutConfig: layoutConfig().just(),
                backgroundColor: PubTool.colors[index % PubTool.colors.length]
            }),
        )
    }
    return boxes
}

function exampleUI(justifyContent: Justify, boxes: View[]) {
    var desc
    switch (justifyContent) {
        case Justify.FLEX_START: desc = 'FLEX_START'; break;
        case Justify.CENTER: desc = 'CENTER'; break;
        case Justify.FLEX_END: desc = 'FLEX_END'; break;
        case Justify.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
        case Justify.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
        case Justify.SPACE_EVENLY: desc = 'SPACE_EVENLY'; break;
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
                justifyContent: justifyContent,
            },
            border: {
                width: 0.5,
                color: Color.safeParse('#666666')
            },
            layoutConfig: layoutConfig().mostWidth().fitHeight()
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
                exampleUI(Justify.FLEX_START, boxes),
                exampleUI(Justify.CENTER, boxes),
                exampleUI(Justify.FLEX_END, boxes),
                exampleUI(Justify.SPACE_BETWEEN, boxes),
                exampleUI(Justify.SPACE_AROUND, boxes),
                exampleUI(Justify.SPACE_EVENLY, boxes),
            ], {
                space: 15,
                layoutConfig: layoutConfig().most().configMargin({top: 5})
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
        for (let index = 0; index < 3; index++) {
            boxes.push(
                text({
                    height: 40,
                    width: 40 + Math.floor(Math.random() * 40),
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(justifyContent: Justify, boxes: View[]) {
        var desc
        switch (justifyContent) {
            case Justify.FLEX_START: desc = 'FLEX_START'; break;
            case Justify.CENTER: desc = 'CENTER'; break;
            case Justify.FLEX_END: desc = 'FLEX_END'; break;
            case Justify.SPACE_BETWEEN: desc = 'SPACE_BETWEEN'; break;
            case Justify.SPACE_AROUND: desc = 'SPACE_AROUND'; break;
            case Justify.SPACE_EVENLY: desc = 'SPACE_EVENLY'; break;
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
                    justifyContent: justifyContent,
                },
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
                layoutConfig: layoutConfig().mostWidth().fitHeight()
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
                    exampleUI(Justify.FLEX_START, boxes),
                    exampleUI(Justify.CENTER, boxes),
                    exampleUI(Justify.FLEX_END, boxes),
                    exampleUI(Justify.SPACE_BETWEEN, boxes),
                    exampleUI(Justify.SPACE_AROUND, boxes),
                    exampleUI(Justify.SPACE_EVENLY, boxes),
                ], {
                    space: 15,
                    layoutConfig: layoutConfig().most().configMargin({top: 5})
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