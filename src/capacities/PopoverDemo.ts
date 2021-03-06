import {
  stack,
  Group,
  Panel,
  popover,
  text,
  gravity,
  Color,
  LayoutSpec,
  vlayout,
  Gravity,
  scroller,
  layoutConfig,
  modal,
  navbar,
} from "doric";
import { title, label, colors } from "./utils";

@Entry
export class PopoverDemo extends Panel {
  build(rootView: Group): void {
    scroller(
      vlayout([
        title("Popover Demo"),
        label("show navbar").apply({
          width: 200,
          height: 50,
          backgroundColor: colors[0],
          textSize: 30,
          textColor: Color.WHITE,
          layoutConfig: layoutConfig().just(),
          onClick: () => {
            navbar(this.context).setHidden(false);
          },
        }),
        label("hide navbar").apply({
          width: 200,
          height: 50,
          backgroundColor: colors[0],
          textSize: 30,
          textColor: Color.WHITE,
          layoutConfig: layoutConfig().just(),
          onClick: () => {
            navbar(this.context).setHidden(true);
          },
        }),
        label("Popover").apply({
          width: 200,
          height: 50,
          backgroundColor: colors[0],
          textSize: 30,
          textColor: Color.WHITE,
          layoutConfig: layoutConfig().just(),
          onClick: () => {
            popover(this.context).show(
              stack(
                [
                  text({
                    width: 200,
                    height: 50,
                    backgroundColor: colors[0],
                    textColor: Color.WHITE,
                    layoutConfig: layoutConfig()
                      .just()
                      .configAlignment(Gravity.Center),
                    text: "This is PopOver Window",
                  }).also((v) => {
                    let idx = 0;
                    v.onClick = () => {
                      v.backgroundColor = colors[++idx % colors.length];
                    };
                    modal(this.context).toast("Dismissed after 3 seconds");
                    setTimeout(() => {
                      popover(this.context).dismiss();
                    }, 3000);
                  }),
                ],
                {
                  layoutConfig: layoutConfig().most().configMargin({left: 20, right:20, top:20, bottom:20}),
                  backgroundColor: Color.RED.alpha(1),
                }
              )
            );
          },
        }),
      ]).apply({
        layoutConfig: layoutConfig().most().configHeight(LayoutSpec.FIT),
        gravity: gravity().center(),
        space: 10,
      })
    )
      .apply({
        layoutConfig: layoutConfig().most(),
      })
      .in(rootView);
  }
}
