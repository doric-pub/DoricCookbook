
import { Color, Gravity, image, layoutConfig, ScaleType, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"

function subViews() {
    // PNG
    let pngView = image({
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png",
    })
    // GIF
    let gifView = image({
        imageUrl: "https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home_animation.gif",
        scaleType: ScaleType.ScaleToFill,
        imageScale: 3,
    })
    // Animated PNG
    let aniPngView = image({
        imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
    })

    return [
        pngView,
        gifView,
        aniPngView
    ]
}

export function ui() {
    return stack(
        [
            vlayout([
                ...subViews()
            ], {
                space: 30,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
            })
        ],
        {
            width: 240,
            height: 380,
            layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `function subViews() {
        // PNG
        let pngView = image({
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/14/Animated_PNG_example_bouncing_beach_ball.png",
        })
        // GIF
        let gifView = image({
            imageUrl: "https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home_animation.gif",
            scaleType: ScaleType.ScaleToFill,
            imageScale: 3,
        })
        // Animated PNG
        let aniPngView = image({
            imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
        })
    
        return [
            pngView,
            gifView,
            aniPngView
        ]
    }
    
    export function ui() {
        return stack(
            [
                vlayout([
                    ...subViews()
                ], {
                    space: 30,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                })
            ],
            {
                width: 240,
                height: 380,
                layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }    
    `
}