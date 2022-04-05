var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Color, FlexDirection, flexlayout, FlexLayout, Gravity, Image, Justify, layoutConfig, text, ViewComponent, vlayout } from "doric";
let MyTabBar = class MyTabBar extends FlexLayout {
    constructor() {
        super();
        this.tempConfig = {};
        this.selectedIndex = 0;
        this.titles = [];
        this.normalColor = Color.GRAY;
        this.selectedColor = Color.safeParse('#4BA664');
        this.backgroundColor = Color.WHITE;
        this.height = Environment.hasNotch ? (48 + 34) : 48;
        this.layoutConfig = layoutConfig().mostWidth().justHeight();
    }
    apply(config) {
        var _a;
        let t = super.apply(config);
        this.tempConfig = config;
        var tabItems = [];
        if (config.titles && config.titles.length > 0) {
            let selectedIndex = (_a = config.selectedIndex) !== null && _a !== void 0 ? _a : t.selectedIndex;
            for (let index = 0; index < config.titles.length; index++) {
                let title = config.titles[index];
                let color = Color.LTGRAY;
                if (config.selectedColor && config.normalColor) {
                    color = (index == selectedIndex) ? config.selectedColor : config.normalColor;
                }
                else {
                    color = (index == selectedIndex) ? t.selectedColor : t.normalColor;
                }
                var imageV = new Image;
                if (config.selectedImages && config.normalImages) {
                    imageV = (index == selectedIndex) ? config.selectedImages[index % config.selectedImages.length] : config.normalImages[index % config.normalImages.length];
                }
                var itemViews = [];
                if (imageV) {
                    itemViews.push(imageV);
                }
                itemViews.push(text({
                    text: title,
                    textSize: 13,
                    textColor: color,
                    layoutConfig: layoutConfig().fit()
                }));
                tabItems.push(vlayout(itemViews, {
                    height: 48,
                    gravity: Gravity.Center,
                    space: 5,
                    layoutConfig: layoutConfig().fitWidth().justHeight(),
                    onClick: () => {
                        t.selectedIndex = index;
                        if (t.tempConfig) {
                            t.tempConfig.selectedIndex = index;
                            t.apply(this.tempConfig);
                        }
                        if (t.onSelectedHandler) {
                            t.onSelectedHandler(this.selectedIndex);
                        }
                    }
                }));
            }
        }
        if (tabItems) {
            // t.removeAllChildren()
            flexlayout(tabItems, {
                flexConfig: {
                    flexDirection: FlexDirection.ROW,
                    justifyContent: Justify.SPACE_AROUND
                },
                layoutConfig: layoutConfig().most()
            }).in(this);
        }
        return t;
    }
};
MyTabBar = __decorate([
    ViewComponent,
    __metadata("design:paramtypes", [])
], MyTabBar);
export { MyTabBar };
export function myTabBar(config) {
    const ret = new MyTabBar;
    if (config) {
        ret.apply(config);
    }
    return ret;
}
//# sourceMappingURL=MyTabBar.js.map