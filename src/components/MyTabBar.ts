import { Color, FlexDirection, flexlayout, FlexLayout, Gravity, Image, Justify, layoutConfig, log, text, View, ViewComponent, vlayout } from "doric";

@ViewComponent
export class MyTabBar extends FlexLayout {
    titles?: string[]
    normalImages?: Image[]
    selectedImages?: Image[]
    normalColor: Color
    selectedColor: Color
    selectedIndex: number
    onSelectedHandler?: (currentIndex: number) => void
    constructor() {
        super()
        this.selectedIndex = 0
        this.titles = []
        this.normalColor = Color.GRAY
        this.selectedColor = Color.safeParse('#4BA664')
        this.backgroundColor = Color.WHITE
        if (Environment.platform == 'iOS') {
            // 有刘海的屏幕:44 没有刘海的屏幕为20
            // 有刘海的屏幕:34 没有刘海的屏幕0
            this.height = Environment.statusBarHeight > 20 ? (48 + 34) : 48
        } else {
            this.height = 48
        }
        this.layoutConfig = layoutConfig().mostWidth().justHeight()
    }

    apply(config: Partial<this>) {
        let t = super.apply(config)
        this.tempConfig = config
        if (config.titles && config.titles.length > 0) {
            var tabItems = []
            let selectedIndex = config.selectedIndex ?? t.selectedIndex
            for (let index = 0; index < config.titles.length; index++) {
                let title = config.titles[index];
                let color = Color.LTGRAY
                if (config.selectedColor && config.normalColor) {
                    color = (index == selectedIndex) ? config.selectedColor : config.normalColor
                } else {
                    color = (index == selectedIndex) ? t.selectedColor : t.normalColor
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
                            t.selectedIndex = index
                            if (t.tempConfig) {
                                t.tempConfig.selectedIndex = index
                                t.apply(this.tempConfig)
                            }
                            if (t.onSelectedHandler) {
                                t.onSelectedHandler(this.selectedIndex)
                            }
                        }
                    }))
            }
        }
        if (tabItems) {
            t.removeAllChildren()
            flexlayout(tabItems as View[], {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_AROUND
                },
                layoutConfig: layoutConfig().most()
            }).in(this)
        }
        return t
    }

    private tempConfig: Partial<this> = {}
}

export function myTabBar(config?: Partial<MyTabBar>) {
    const ret = new MyTabBar
    log('myTabBar')
    if (config) {
        ret.apply(config)
        // ret.applyChild(config)
    }
    return ret
}
