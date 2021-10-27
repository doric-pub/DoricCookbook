
import { Color, Gravity, layoutConfig, Stack, stack, View, ViewComponent, vlayout } from "doric"
import * as PubTool from "../PubTool"

export function ui() {
    let cyanView = stack([],
        {
            width: 80,
            height: 80,
            layoutConfig: layoutConfig().just(),
            backgroundColor: Color.CYAN
        }
    )
    return stack(
        [
            cyanView
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

    return `export function ui() {
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Left),
                backgroundColor: Color.CYAN
            }
        )
        return stack(
            [
                cyanView
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