import { Color, FlexDirection, flexlayout, FlexLayout, Gravity, Image, Justify, layoutConfig, log, logw, text, View, ViewComponent, vlayout } from "doric";
import * as PubTool from "../PubTool"

@ViewComponent
export class MyTabBar extends FlexLayout {
    titles: string[]
    normalImages: Image[]
    selectedImages: Image[]
    normalColor: Color
    selectedColor: Color
    selectedIndex: number
    onSelectedHandler: (currentIndex: number) => void
    constructor() {
        super()
        this.selectedIndex = 0
        this.titles = []
        this.normalImages = []
        this.selectedImages = []
        this.normalColor = Color.GRAY
        this.selectedColor = Color.safeParse('#4BA664')
        this.backgroundColor = Color.WHITE
        this.onSelectedHandler = function(currentIndex:number){}
        // 有刘海的屏幕:44 没有刘海的屏幕为20
        // 有刘海的屏幕:34 没有刘海的屏幕0
        this.height = Environment.statusBarHeight > 20 ? (48 + 34) : 48
        this.layoutConfig = layoutConfig().mostWidth().justHeight()
    }

    private tempConfig: {
        titles?: string[],
        selectedIndex?: number,
        normalImages?: Image[],
        selectedImages?: Image[],
        normalColor?: Color,
        selectedColor?: Color,
    } = {}

    applyChild(config: {
        titles?: string[],
        selectedIndex?: number,
        normalImages?: Image[],
        selectedImages?: Image[],
        normalColor?: Color,
        selectedColor?: Color,
    }) {
        this.tempConfig = config
        if (config.titles && config.titles.length > 0) {
            var tabItems = []
            let selectedIndex = config.selectedIndex ?? this.selectedIndex
            for (let index = 0; index < config.titles.length; index++) {
                let title = config.titles[index];
                let color = Color.LTGRAY
                if (config.selectedColor && config.normalColor) {
                    color = (index == selectedIndex) ? config.selectedColor : config.normalColor
                } else {
                    color = (index == selectedIndex) ? this.selectedColor : this.normalColor
                }
                let imageV
                if (config.selectedImages && config.normalImages) {
                    imageV = (index == selectedIndex) ? config.selectedImages[index % config.selectedImages.length] : config.normalImages[index % config.normalImages.length]
                }
                var itemViews = []
                if (imageV) {
                    itemViews.push(imageV)
                }
                itemViews.push(
                    text({
                        text: title,
                        textSize: 13,
                        textColor: color,
                        layoutConfig: layoutConfig().fit()
                    }))
                tabItems.push(
                    vlayout(itemViews, {
                        height: 48,
                        gravity: Gravity.Center,
                        space: 5,
                        layoutConfig: layoutConfig().fitWidth().justHeight(),
                        onClick: () => {
                            log('点击当前index=' + index)
                            this.selectedIndex = index
                            if (this.tempConfig) {
                                this.tempConfig.selectedIndex = index
                                this.applyChild(this.tempConfig)
                            }
                            if (this.onSelectedHandler) {
                                this.onSelectedHandler(this.selectedIndex)
                            }
                        }
                    }))
            }
        }
        if (tabItems) {
            this.removeAllChildren()
            flexlayout(tabItems as View[], {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_AROUND
                },
                layoutConfig: layoutConfig().most()
            }).in(this)
        }
        return this
    }
}

export function myTabBar(config?: Partial<MyTabBar>) {
    const ret = new MyTabBar
    if (config) {
        ret.apply(config)
    }
    return ret
}
