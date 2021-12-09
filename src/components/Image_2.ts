
import { Color, Gravity, image, layoutConfig, ScaleType, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"

function subViews() {
    // WebP
    let webPImage = image({
        imageUrl: "https://p.upyun.com/demo/webp/webp/jpg-0.webp",
        layoutConfig: layoutConfig().just(),
        width: 200,
        height: 200,
        loadCallback: (ret) => {
            if (ret) {
                webPImage.width = ret.width
                webPImage.height = ret.height
            }
        }
    })

    // Animated WebP
    let animatedWebPImage = image({
        imageUrl: "https://p.upyun.com/demo/webp/webp/animated-gif-0.webp",
        width: 200,
        height: 200,
        loadCallback: (ret) => {
            if (ret) {
                animatedWebPImage.width = ret.width
                animatedWebPImage.height = ret.height
            }
        }
    })

    return [
        webPImage,
        animatedWebPImage,
    ]
}

export function ui() {
    return stack(
        [
            vlayout([
                ...subViews()
            ], {
                space: 10,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
            })
        ],
        {

            layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
            backgroundColor: PubTool.bgColor,
        }
    )
}

export function codeString() {

    return `function subViews() {
        // WebP
        let webPImage = image({
            imageUrl: "https://p.upyun.com/demo/webp/webp/jpg-0.webp",
            layoutConfig: layoutConfig().just(),
            width: 200,
            height: 200,
            loadCallback: (ret) => {
                if (ret) {
                    webPImage.width = ret.width
                    webPImage.height = ret.height
                }
            }
        })
    
        // Animated WebP
        let animatedWebPImage = image({
            imageUrl: "https://p.upyun.com/demo/webp/webp/animated-gif-0.webp",
            width: 200,
            height: 200,
            loadCallback: (ret) => {
                if (ret) {
                    animatedWebPImage.width = ret.width
                    animatedWebPImage.height = ret.height
                }
            }
        })
    
        return [
            webPImage,
            animatedWebPImage,
        ]
    }
    
    export function ui() {
        return stack(
            [
                vlayout([
                    ...subViews()
                ], {
                    space: 10,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                })
            ],
            {
    
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}