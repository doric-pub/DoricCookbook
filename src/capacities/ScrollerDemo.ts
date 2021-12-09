import {
  Group,
  Panel,
  Color,
  vlayout,
  scroller,
  layoutConfig,
  hlayout,
} from "doric";
import { label } from "./utils";

@Entry
export class ScrollerDemo extends Panel {
  build(rootView: Group): void {
    scroller(
      hlayout(
        [
          vlayout([
            scroller(
              vlayout(
                new Array(50).fill(1).map((e) => label("Scroll Content1"))
              ),
              {
                layoutConfig: layoutConfig().justWidth().fitHeight(),
                width: 300,
                backgroundColor: Color.RED,
              }
            ),
            scroller(
              vlayout(
                new Array(50).fill(1).map((e) => label("Scroll Content2"))
              ),
              {
                layoutConfig: layoutConfig().justWidth().fitHeight(),
                width: 300,
                backgroundColor: Color.CYAN,
              }
            ),
          ]),
          vlayout(
            new Array(50).fill(1).map((e) => label("Scroll Content3"))
          ).apply({
            layoutConfig: layoutConfig().justWidth().fitHeight(),
            width: 300,
          }),
        ],
        {
          layoutConfig: layoutConfig().fitWidth().fitHeight(),
        }
      ),
      {
        layoutConfig: layoutConfig().mostWidth().justHeight(),
        height: 500,
        backgroundColor: Color.YELLOW,
      }
    ).in(rootView);
  }
}
