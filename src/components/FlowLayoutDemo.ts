import {
  Group,
  Panel,
  flowlayout,
  layoutConfig,
  text,
  Color,
  LayoutSpec,
  Gravity,
  flowItem,
  log,
  Image,
} from "doric";
import * as PubTool from "../PubTool";

@Entry
export class FlowLayoutDemo extends Panel {
  build(rootView: Group) {
    const flowView = flowlayout({
      layoutConfig: layoutConfig().most(),
      itemCount: 20,
      columnCount: 3,
      columnSpace: 10,
      rowSpace: 10,
      renderItem: (idx) => {
        return flowItem(
          text({
            text: `${idx}`,
            textColor: Color.BLACK,
            textSize: 20,
            layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
          }),
          {
            backgroundColor: PubTool.colors[idx % PubTool.colors.length],
            height: 50 + (idx % 3) * 20,
            layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
            onClick: async () => {
              const ret = await flowView.findCompletelyVisibleItems(
                this.context
              );
            },
          }
        ).also((it) => {
          if (idx == 15) {
            it.fullSpan = true;
            it.identifier = "fullSpan";
          }
        });
      },
      loadMore: true,
      onLoadMore: () => {
        setTimeout(() => {
          flowView.itemCount += 20;
        }, 1000);
      },
      loadMoreView: flowItem(
        text({
          text: "load more",
          textColor: Color.WHITE,
          textSize: 20,
          layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
        }),
        {
          backgroundColor: PubTool.colors[500 % PubTool.colors.length],
          height: 50,
          fullSpan: true,
          layoutConfig: layoutConfig().configWidth(LayoutSpec.MOST),
        }
      ),
      onScrollEnd: async () => {
        const ret = await flowView.findCompletelyVisibleItems(this.context);
        log("completelyVisible Items is:", ret);

        const ret2 = await flowView.findVisibleItems(this.context);
        log("visible Items is:", ret2);
      },
    }).in(rootView);
  }
}
