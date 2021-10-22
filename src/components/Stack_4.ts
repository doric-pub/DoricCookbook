
import { animate, Color, gravity, Gravity, layoutConfig, LayoutSpec, stack } from "doric"
import * as PubTool from "../PubTool"

export function ui() {

    const cyanView = stack([],
        {
            width: 80,
            height: 80,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: Color.CYAN,
            onClick: () => {
                animate(context)({
                    animations: () => {
                        if (cyanView.rotation) {
                            cyanView.rotation += 0.25
                        } else {
                            cyanView.rotation = 0.25
                        }
                    },
                    duration: 3000
                })
            }
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

        const cyanView = stack([],
            {
                width: 80,
                height: 80,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                backgroundColor: Color.CYAN,
                onClick: () => {
                    animate(context)({
                        animations: () => {
                            if (cyanView.rotation) {
                                cyanView.rotation += 0.25
                            } else {
                                cyanView.rotation = 0.25
                            }
                        },
                        duration: 3000
                    })
                }
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