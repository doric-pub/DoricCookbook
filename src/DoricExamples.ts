import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec } from "doric";

const colors = [
    "#f0932b",
    "#eb4d4b",
    "#6ab04c",
    "#e056fd",
    "#686de0",
    "#30336b",
]

function cell(index = 0) {
    var padding = 10
    return stack([
        stack(
            [],{
                width: 100,
                layoutConfig: layoutConfig().most(),
                backgroundColor:Color.RED,
            }
        )
    ], {
        height: 200,
        layoutConfig: {
            widthSpec: LayoutSpec.MOST,
            heightSpec: LayoutSpec.JUST,
        },
        padding:{left: padding, right: padding, top: padding, bottom: padding},
        backgroundColor: Color.parse(colors[index || 0]),
    })
}

@Entry
class MainWidget extends Panel {
    onShow() {
        navbar(context).setTitle("DoricExamples")
    }
    build(rootView: Group): void {
        list({
            itemCount: 8,
            renderItem: (index: number) => cell(index%colors.length)
        }).apply({
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}
