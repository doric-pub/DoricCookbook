
import { Color, FlexDirection, flexlayout, Gravity, hlayout, layoutConfig, stack, text, View, vlayout } from "doric"
import * as PubTool from "../PubTool"

function createBoxes() {
    var boxes: View[] = []
    for (let index = 1; index <= 5; index++) {
        boxes.push(
            text({
                text: `${index}`,
                height: 45,
                width: 45,
                layoutConfig: layoutConfig().just(),
                backgroundColor: PubTool.colors[index % PubTool.colors.length]
            }),
        )
    }
    return boxes
}

function exampleUI(flexDirection: FlexDirection, boxes: View[]) {
    var desc
    switch (flexDirection) {
        case FlexDirection.COLUMN: desc = 'COLUMN'; break;
        case FlexDirection.COLUMN_REVERSE: desc = 'COLUMN_REVERSE'; break;
        case FlexDirection.ROW: desc = 'ROW'; break;
        case FlexDirection.ROW_REVERSE: desc = 'ROW_REVERSE'; break;
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
                flexDirection: flexDirection
            },
            layoutConfig: layoutConfig().fit(),
            border: {
                width: 0.5,
                color: Color.safeParse('#666666')
            },
        }),
    ], {
        space: 2,
        layoutConfig: layoutConfig().fit()
    })
}

/// Flex Box布局
export function ui() {
    let boxes = createBoxes()
    return stack(
        [
            vlayout([
                exampleUI(FlexDirection.ROW, boxes),
                exampleUI(FlexDirection.ROW_REVERSE, boxes),
                exampleUI(FlexDirection.COLUMN, boxes),
                exampleUI(FlexDirection.COLUMN_REVERSE, boxes),
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
        for (let index = 1; index <= 5; index++) {
            boxes.push(
                text({
                    text: \`\${index}\`,
                    height: 45,
                    width: 45,
                    layoutConfig: layoutConfig().just(),
                    backgroundColor: PubTool.colors[index % PubTool.colors.length]
                }),
            )
        }
        return boxes
    }
    
    function exampleUI(flexDirection: FlexDirection, boxes: View[]) {
        var desc
        switch (flexDirection) {
            case FlexDirection.COLUMN: desc = 'COLUMN'; break;
            case FlexDirection.COLUMN_REVERSE: desc = 'COLUMN_REVERSE'; break;
            case FlexDirection.ROW: desc = 'ROW'; break;
            case FlexDirection.ROW_REVERSE: desc = 'ROW_REVERSE'; break;
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
                    flexDirection: flexDirection
                },
                layoutConfig: layoutConfig().fit(),
                border: {
                    width: 0.5,
                    color: Color.safeParse('#666666')
                },
            }),
        ], {
            space: 2,
            layoutConfig: layoutConfig().fit()
        })
    }
    
    /// Flex Box布局
    export function ui() {
        let boxes = createBoxes()
        return stack(
            [
                vlayout([
                    exampleUI(FlexDirection.ROW, boxes),
                    exampleUI(FlexDirection.ROW_REVERSE, boxes),
                    exampleUI(FlexDirection.COLUMN, boxes),
                    exampleUI(FlexDirection.COLUMN_REVERSE, boxes),
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