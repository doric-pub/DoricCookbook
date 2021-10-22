
import { Color, GradientOrientation, Gravity, layoutConfig, LayoutSpec, stack, text, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 颜色渐变
export function ui() {

    return stack(
        [
            vlayout([
                text({
                    text: "渐变方向为：L_R",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.LEFT_RIGHT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：R_L",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.RIGHT_LEFT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：T_B",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TOP_BOTTOM,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：TL_BR",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TL_BR,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
            ], {
                space: 10,
                layoutConfig: layoutConfig().most(),
            })
        ],
        {
            width: 240,
            // height: 160,
            layoutConfig: layoutConfig().justWidth().fitHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
/// 颜色渐变
export function ui() {

    return stack(
        [
            vlayout([
                text({
                    text: "渐变方向为：L_R",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.LEFT_RIGHT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：R_L",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.RIGHT_LEFT,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：T_B",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TOP_BOTTOM,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
                text({
                    text: "渐变方向为：TL_BR",
                    textSize: 18,
                    fontStyle: "bold",
                    backgroundColor: Color.TRANSPARENT,
                    textColor: {
                        start: Color.RED,
                        end: Color.GREEN,
                        orientation: GradientOrientation.TL_BR,
                    },
                    textAlignment: Gravity.Left,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                }),
            ], {
                space: 10,
                layoutConfig: layoutConfig().most(),
            })
        ],
        {
            width: 240,
            // height: 160,
            layoutConfig: layoutConfig().justWidth().fitHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `
}