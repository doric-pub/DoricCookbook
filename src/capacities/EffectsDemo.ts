
import { Group, Panel, Text, text, Color, Stack, vlayout, hlayout, scroller, layoutConfig, Gravity, GradientOrientation } from "doric";
import * as PubTool from "../PubTool"

function box(idx = 0) {
    return (new Stack).also(it => {
        it.width = it.height = 20
        it.backgroundColor = Color.CYAN
    })
}

function boxStr(str: string, idx = 0) {
    return (new Text).also(it => {
        it.width = it.height = 20
        it.text = str
        it.textColor = Color.WHITE
        it.backgroundColor = Color.RED
    })
}

function label(str: string) {
    return text({
        text: str,
        textSize: 16,
    })
}

@Entry
export class EffectsDemo extends Panel {

    build(rootView: Group) {
        scroller(
            vlayout(
                [
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Origin view"),
                                    box().apply({
                                        width: 100,
                                        height: 100
                                    }),],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                            vlayout(
                                [
                                    label("Border"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        border: {
                                            width: 5,
                                            color: PubTool.randomColor()
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 10,
                                        layoutConfig: layoutConfig().just().configMargin({
                                            bottom: 10
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                            vlayout(
                                [
                                    label("Shadow"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 3,
                                            offsetY: 3,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            bottom: 10
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Border,Corner"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        border: {
                                            width: 5,
                                            color: PubTool.randomColor()
                                        },
                                        corners: 10,
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                            vlayout(
                                [
                                    label("Border,Shadow"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        border: {
                                            width: 5,
                                            color: PubTool.randomColor()
                                        },
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 3,
                                            offsetY: 3,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            bottom: 10
                                        })
                                    }),],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner,Shadow"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 10,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 3,
                                            offsetY: 3,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            bottom: 10
                                        })
                                    }),],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Border,Corner,Shadow"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        border: {
                                            width: 5,
                                            color: PubTool.randomColor()
                                        },
                                        corners: 10,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 3,
                                            offsetY: 3,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Shadow"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 50,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 0,
                                            offsetY: 0,
                                            radius: 10,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 10,
                                            right: 10,
                                            bottom: 10,
                                        })
                                    }),],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }
                            ),
                            vlayout(
                                [
                                    label("Shadow,offset"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 50,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 5,
                                            offsetY: 5,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 10,
                                            right: 10,
                                            bottom: 10,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Shadow,opacity"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 50,
                                        shadow: {
                                            opacity: 0.5,
                                            color: PubTool.randomColor(),
                                            offsetX: 5,
                                            offsetY: 5,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 10,
                                            right: 10,
                                            bottom: 10,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Shadow,color"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 50,
                                        shadow: {
                                            opacity: 1,
                                            color: PubTool.randomColor(),
                                            offsetX: 5,
                                            offsetY: 5,
                                            radius: 5,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 10,
                                            right: 10,
                                            bottom: 10,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Corner round"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: 50,
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner left top"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: {
                                            leftTop: 50,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner right top"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: {
                                            rightTop: 50,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner left bottom"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: {
                                            leftBottom: 50,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Corner right bottom"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        corners: {
                                            rightBottom: 50,
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Gradient TOP_BOTTOM"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.TOP_BOTTOM
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient TR_BL"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.TR_BL
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient RIGHT_LEFT"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.RIGHT_LEFT
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient BR_TL"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.BR_TL
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient BOTTOM_TOP"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.BOTTOM_TOP
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient BL_TR"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.BL_TR
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient LEFT_RIGHT"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.LEFT_RIGHT
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Gradient TL_BR"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            start: PubTool.randomColor(),
                                            end: Color.WHITE,
                                            orientation: GradientOrientation.TL_BR
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Multi-Grad TOP_BOTTOM"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.TOP_BOTTOM
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad TR_BL"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.TR_BL
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad RIGHT_LEFT"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.RIGHT_LEFT
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad BR_TL"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.BR_TL
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad BOTTOM_TOP"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.BOTTOM_TOP
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad BL_TR"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.BL_TR
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad LEFT_RIGHT"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.LEFT_RIGHT
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                            vlayout(
                                [
                                    label("Multi-Grad TL_BR"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            orientation: GradientOrientation.TL_BR
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                        ],
                        { space: 20 }
                    ),
                    hlayout(
                        [
                            vlayout(
                                [
                                    label("Multi-Grad locations"),
                                    box().apply({
                                        width: 100,
                                        height: 100,
                                        backgroundColor: {
                                            colors: [PubTool.randomColor(), Color.WHITE, PubTool.randomColor()],
                                            locations: [0, 0.3, 1],
                                            orientation: GradientOrientation.TOP_BOTTOM
                                        },
                                        layoutConfig: layoutConfig().just().configMargin({
                                            left: 5,
                                            right: 5,
                                            bottom: 5,
                                        })
                                    }),
                                ],
                                {
                                    gravity: Gravity.Center,
                                    space: 10,
                                }),
                        ],
                        { space: 20 }
                    )
                ],
                {
                    space: 20
                }),
            {
                layoutConfig: layoutConfig().most()
            }
        ).in(rootView)
    }
}