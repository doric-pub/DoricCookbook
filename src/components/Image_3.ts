
import { AssetsResource, Gravity, image, layoutConfig, ScaleType, stack, vlayout } from "doric"
import * as PubTool from "../PubTool"
import buttonImage from "../images/button.png"

export function ui() {
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
                image({
                  image: new AssetsResource("coupon_bg2.png"),
                  height: 48,
                  width: 78,
                  scaleType: ScaleType.ScaleAspectFill,
                  layoutConfig: layoutConfig().just(),
                }),
                image({
                  image: new AssetsResource("coupon_bg2.png"),
                  height: 48,
                  width: 78 * 3,
                  scaleType: ScaleType.ScaleToFill,
                  imageScale: 1,
                  layoutConfig: layoutConfig().just(),
                  stretchInset: {
                    left: 0,
                    top: 0,
                    right: 76,
                    bottom: 0,
                  },
                }),
            ], {
                space: 20,
                gravity: Gravity.Center,
                layoutConfig: layoutConfig().mostWidth().fitHeight(),
            })
        ],
        {
            layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
            padding: {left: 10, right: 10, top: 10, bottom: 10},
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
                    image({
                      image: new AssetsResource("coupon_bg2.png"),
                      height: 48,
                      width: 78,
                      scaleType: ScaleType.ScaleAspectFill,
                      layoutConfig: layoutConfig().just(),
                    }),
                    image({
                      image: new AssetsResource("coupon_bg2.png"),
                      height: 48,
                      width: 78 * 3,
                      scaleType: ScaleType.ScaleToFill,
                      imageScale: 1,
                      layoutConfig: layoutConfig().just(),
                      stretchInset: {
                        left: 0,
                        top: 0,
                        right: 76,
                        bottom: 0,
                      },
                    }),
                ], {
                    space: 20,
                    gravity: Gravity.Center,
                    layoutConfig: layoutConfig().mostWidth().fitHeight(),
                })
            ],
            {
                layoutConfig: layoutConfig().mostWidth().fitHeight().configAlignment(Gravity.Center),
                padding: {left: 10, right: 10, top: 10, bottom: 10},
                backgroundColor: PubTool.bgColor,
            }
        )
    }
    `
}