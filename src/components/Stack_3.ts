
import { Color, gravity, Gravity, layoutConfig, LayoutSpec, stack } from "doric"
import * as PubTool from "../PubTool"

function subViews() {

    let blueView = stack([],
        {
            width: 80,
            height: 80,
            layoutConfig: layoutConfig().just().configAlignment(gravity().right().top()),
            backgroundColor: Color.BLUE,
        }
    )

    let cyanView = stack([],
        {
            width: 80,
            height: 80,
            layoutConfig: layoutConfig().just().configAlignment(gravity().left().bottom()),
            backgroundColor: Color.CYAN
        }
    )

    let redView = stack([],
        {
            width: 60,
            height: 60,
            layoutConfig: layoutConfig().just().configAlignment(gravity().right().bottom()),
            backgroundColor: Color.RED,
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

export function codeString() {

    return `function subViews() {

        let blueView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(gravity().right().top()),
                backgroundColor: Color.BLUE,
            }
        )
    
        let cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(gravity().left().bottom()),
                backgroundColor: Color.CYAN
            }
        )
    
        let redView = stack([],
            {
                width: 60,
                height: 60,
                layoutConfig: layoutConfig().just().configAlignment(gravity().right().bottom()),
                backgroundColor: Color.RED,
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