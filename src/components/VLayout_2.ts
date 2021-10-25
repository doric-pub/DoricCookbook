
import { Color, Gravity, layoutConfig, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 垂直线性布局容器控件
export function ui() {

    let cyanView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            vlayout([
                cyanView,
                redView,
            ],{
                space: 10,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().most()
            }),
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
/// 垂直线性布局容器控件
export function ui() {

    let cyanView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            vlayout([
                cyanView,
                redView,
            ],{
                space: 10,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().most()
            }),
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().justWidth().justHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `
}