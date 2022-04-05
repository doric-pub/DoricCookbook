import {
  AssetsResource,
  Color,
  Gravity,
  image,
  layoutConfig,
  ScaleType,
  stack,
  vlayout,
} from "doric";
import * as PubTool from "../PubTool";

export function ui() {
  return stack(
    [
      vlayout(
        [
          image({
            image: new AssetsResource("dididi.png"),
            height: 78,
            width: 84,
            backgroundColor: Color.BLACK,
            scaleType: ScaleType.ScaleAspectFill,
            layoutConfig: layoutConfig().just(),
          }),
          image({
            image: new AssetsResource("dididi.png"),
            height: 78,
            width: 84 * 3,
            imageScale: 1,
            backgroundColor: Color.BLACK,
            scaleType: ScaleType.Tile,
            layoutConfig: layoutConfig().just(),
          }),

          image({
            image: new AssetsResource("123.png"),
            height: 288 / 2,
            width: 154 / 2,
            scaleType: ScaleType.ScaleAspectFill,
            layoutConfig: layoutConfig().just(),
          }),
          image({
            image: new AssetsResource("123.png"),
            height: 288,
            width: 154,
            imageScale: 2,
            scaleType: ScaleType.Tile,
            layoutConfig: layoutConfig().just(),
          }),
        ],
        {
          space: 20,
          gravity: Gravity.Center,
          layoutConfig: layoutConfig().mostWidth().fitHeight(),
        }
      ),
    ],
    {
      layoutConfig: layoutConfig()
        .mostWidth()
        .fitHeight()
        .configAlignment(Gravity.Center),
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
      backgroundColor: PubTool.bgColor,
    }
  );
}

export function codeString() {
  return `export function ui() {
    return stack(
      [
        vlayout(
          [
            image({
              image: new AssetsResource("dididi.png"),
              height: 78,
              width: 84,
              backgroundColor: Color.BLACK,
              scaleType: ScaleType.ScaleAspectFill,
              layoutConfig: layoutConfig().just(),
            }),
            image({
              image: new AssetsResource("dididi.png"),
              height: 78,
              width: 84 * 3,
              imageScale: 1,
              backgroundColor: Color.BLACK,
              scaleType: ScaleType.Tile,
              layoutConfig: layoutConfig().just(),
            }),
  
            image({
              image: new AssetsResource("123.png"),
              height: 288 / 2,
              width: 154 / 2,
              scaleType: ScaleType.ScaleAspectFill,
              layoutConfig: layoutConfig().just(),
            }),
            image({
              image: new AssetsResource("123.png"),
              height: 288,
              width: 154,
              imageScale: 2,
              scaleType: ScaleType.Tile,
              layoutConfig: layoutConfig().just(),
            }),
          ],
          {
            space: 20,
            gravity: Gravity.Center,
            layoutConfig: layoutConfig().mostWidth().fitHeight(),
          }
        ),
      ],
      {
        layoutConfig: layoutConfig()
          .mostWidth()
          .fitHeight()
          .configAlignment(Gravity.Center),
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
        backgroundColor: PubTool.bgColor,
      }
    );
  }
    `;
}
