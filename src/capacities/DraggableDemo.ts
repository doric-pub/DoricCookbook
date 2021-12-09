import {
  Panel,
  Group,
  vlayout,
  layoutConfig,
  draggable,
  Color,
  Text,
  modal,
  Gravity,
  stack,
  text,
} from "doric";
@Entry
export class DraggableDemo extends Panel {
  build(root: Group) {
    let textView: Text;
    let drag = draggable(
      (textView = text({
        layoutConfig: layoutConfig().just().configAlignment(Gravity.Center),
        width: 100,
        height: 30,
        textColor: Color.RED,
        onClick: () => {
          modal(this.context).toast("Clicked");
        },
      })),
      {
        onDrag: (x: number, y: number) => {
          textView.text = "x: " + x.toFixed(0) + " y: " + y.toFixed(0);
        },
        layoutConfig: layoutConfig().just(),
        width: 100,
        height: 100,
        backgroundColor: Color.YELLOW,
      }
    );
    vlayout(
      [
        text({
          layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
          text: "Draggable Demo",
          textColor: Color.RED,
        }),
        stack([drag], {
          layoutConfig: layoutConfig().most(),
        }),
      ],
      {
        layoutConfig: layoutConfig().most(),
        backgroundColor: Color.CYAN,
      }
    ).in(root);
  }
}
