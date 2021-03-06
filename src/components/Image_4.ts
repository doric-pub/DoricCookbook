
import { Gravity, image, layoutConfig, ScaleType, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"

export function ui() {
    return stack(
        [
            vlayout([

                image({
                    layoutConfig: layoutConfig().fit(),
                    imageRes: 'ress'
                }),

            ], {
                space: 20,
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

    return `export function ui() {
        return stack(
            [
                vlayout([
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().fit(),
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().fit(),
                        imageScale: 2,
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().just(),
                        width: 200,
                        height: 150 / 2.75,
                        stretchInset: {
                            left: 100,
                            top: 0,
                            right: 100,
                            bottom: 0
                        },
                        imageScale: 2.75,
                    }),
    
                    image({
                        imageBase64: buttonImage,
                        scaleType: ScaleType.ScaleToFill,
                        layoutConfig: layoutConfig().just(),
                        width: 200,
                        height: 75,
                        stretchInset: {
                            left: 100,
                            top: 0,
                            right: 100,
                            bottom: 0
                        },
                        imageScale: 2,
                    }),
    
                ], {
                    space: 20,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                })
            ],
            {
                width: 240,
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}