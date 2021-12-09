import { Align, Color, Direction, FlexDirection, flexlayout, Gravity, Group, hlayout, HLayout, Justify, layoutConfig, list, ListItem, listItem, log, Panel, Stack, stack } from "doric"
import * as PubTool from "../PubTool"

function cornerExampleCell(index: number): ListItem {
    var box1 = box().apply({
        layoutConfig: layoutConfig().just(),
        corners: {
            leftTop: 30,
            rightBottom: 30,
        },
        onClick: () => {
            if (index % 2 == 0) {
                box1.corners = {
                    leftTop: 0,
                    rightBottom: 30,
                }
            } else {
                box1.corners = {
                    leftBottom: 30,
                    rightTop: 30,
                }
            }
        }
    });
    var box2 = box().apply({
        layoutConfig: layoutConfig().just(),
        corners: 30,
        onClick: () => {
            if (index % 2 == 0) {
                box2.corners = 50
            } else {
                box2.corners = 0
            }
        }
    });

    return listItem(
        stack([

            flexlayout([
                box1,
                box2,
            ], {
                flexConfig: {
                    direction: Direction.LTR,
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_AROUND,
                    alignItems: Align.CENTER
                },
                layoutConfig: layoutConfig().most().configAlignment(Gravity.Center),
            }),

            line(),
        ],
            {
                layoutConfig: layoutConfig().most(),
            }
        ),
        {
            height: 120,
            layoutConfig: layoutConfig().justHeight().mostWidth(),
            identifier: 'cornerExampleCell'
        }
    );
}



function line() {
    return (new Stack).also(it => {
        it.height = 0.5
        it.backgroundColor = Color.LTGRAY
        it.layoutConfig = layoutConfig().justHeight().mostWidth().configAlignment(Gravity.Bottom)
    })
}

function box() {
    return (new Stack).also(it => {
        it.width = it.height = 100
        it.backgroundColor = PubTool.randomColor()
    })
}

@Entry
export class ListEffectsDemo extends Panel {
    build(rootView: Group): void {
        list({
            itemCount: 10,
            renderItem: (index) => cornerExampleCell(index),
        }).apply({
            layoutConfig: layoutConfig().most()
        }).in(rootView)
    }
}

