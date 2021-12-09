import { Panel, stack, Group, vlayout, layoutConfig, Gravity, text, Text, Color, navbar, hlayout, list, LayoutSpec, ListItem, listItem, HLayout, modal, navigator, flexlayout, FlexDirection, Align, Justify, View, image } from "doric";

@Entry
export class TestImageDemo extends Panel {

    onShow() {
        navbar(this.context).setTitle('yyimage')
    }

    build(rootView: Group): void {
        stack([
            stack([
                image({
                    imageUrl: "https://p6.hellobixin.com/bx-user/e2879f178be74b9ba4a6df52a2e364b0.png",
                    backgroundColor: Color.RED,
                    width: 200,
                    height: 280,
                    layoutConfig: layoutConfig().just(),
                })
            ], {
                backgroundColor: Color.BLUE,
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            })
        ], {
            layoutConfig: layoutConfig().most(),
        }).in(rootView)
    }
}


