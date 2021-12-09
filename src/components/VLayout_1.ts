
import { Color, Gravity, layoutConfig, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"

/// 垂直线性布局容器控件
export function ui() {
    let blueView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.BLUE,
        }
    )
    let cyanView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )
    return stack(
        [
            vlayout([
                blueView,
                cyanView,
            ],{
                space: 10,
                gravity: Gravity.Left,
                layoutConfig: layoutConfig().most()
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
    /// 垂直线性布局容器控件
    export function ui() {
        let blueView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.BLUE,
            }
        )
        let cyanView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.CYAN
            }
        )
        return stack(
            [
                vlayout([
                    blueView,
                    cyanView,
                ],{
                    space: 10,
                    gravity: Gravity.Left,
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