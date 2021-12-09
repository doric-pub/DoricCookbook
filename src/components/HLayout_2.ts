
import { Color, gravity, Gravity, hlayout, layoutConfig, stack } from "doric"
import * as PubTool from "../PubTool"

/// 水平线性布局容器控件
export function ui() {

    let blueView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({right: 10}),
            backgroundColor: Color.BLUE,
        }
    )

    let cyanView = stack([],
        {
            width: 60,
            height: 100,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({left: 10}),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            hlayout([
                blueView,
                cyanView,
                redView,
            ],{
                gravity: gravity().center(),
                layoutConfig: layoutConfig().most(),
            }),
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `
/// 水平线性布局容器控件
export function ui() {

    let blueView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({right: 10}),
            backgroundColor: Color.BLUE,
        }
    )

    let cyanView = stack([],
        {
            width: 60,
            height: 100,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configMargin({left: 10}),
            backgroundColor: Color.RED
        }
    )

    return stack(
        [
            hlayout([
                blueView,
                cyanView,
                redView,
            ],{
                gravity: gravity().center(),
                layoutConfig: layoutConfig().most(),
            }),
        ],
        {
            width: 240,
            height: 160,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}
    `
}