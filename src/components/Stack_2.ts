
import { Color, Gravity, layoutConfig, stack } from "doric"
import * as PubTool from "../PubTool"

function box(backgroundColor: Color, width: number) {
    return stack([],
        {
            width: width,
            height: width,
            layoutConfig: layoutConfig().just(),
            backgroundColor: backgroundColor,
        }
    )
}

export function ui() {
    return stack(
        [
            box(Color.BLUE, 100),
            box(Color.CYAN, 80),
            box(Color.RED, 60),
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

    return ` function subViews() {

        let blueView = stack([],
            {
                width: 100,
                height: 100,
                layoutConfig: layoutConfig().just(),
                backgroundColor: Color.BLUE,
            }
        )
    
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
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
    
        return [
            blueView,
            cyanView,
            redView
        ]
    }
    
    export function ui() {
    
        return stack(
            [
                ...subViews()
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