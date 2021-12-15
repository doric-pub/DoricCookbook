var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Color, createRef, GestureContainer, Gravity, jsx, layoutConfig, log, navbar, Panel, Stack, Text } from "doric";
let GestureTSXDemo = class GestureTSXDemo extends Panel {
    onShow() {
        navbar(this.context).setTitle('GestureTSXDemo');
    }
    build(rootView) {
        const textRef = createRef();
        const stackRef = createRef();
        jsx.createElement(GestureContainer, { parent: rootView, layoutConfig: layoutConfig().most(), onClick: () => {
                textRef.current.text = 'onClick';
                log('onClick');
            }, onDoubleTap: () => {
                textRef.current.text = 'onDoubleTap';
                log('onDoubleTap');
            }, onLongPress: () => {
                textRef.current.text = 'onLongPress';
                log('onLongPress');
            }, onPan: (dx, dy) => {
                textRef.current.text = `onPan dx:${dx} dy:${dy}`;
                log(`${textRef.current.text}`);
            }, onPinch: (scale) => {
                textRef.current.text = `onPinch scale: ${scale}`;
                log(`${textRef.current.text}`);
            }, onRotate: (dAngle) => {
                textRef.current.text = `onRotate dAngle: ${dAngle}`;
                log(`${textRef.current.text}`);
            }, onSwipe: (orientation) => {
                textRef.current.text = `onSwipe orientation: ${orientation}`;
                log(`${textRef.current.text}`);
            }, onTouchDown: (event) => {
                textRef.current.text = `onTouchDown event.x:${event.x} event.y:${event.y}`;
                log(`${textRef.current.text}`);
                stackRef.current.centerX = event.x;
                stackRef.current.centerY = event.y;
            }, onTouchMove: (event) => {
                textRef.current.text = `onTouchMove event.x:${event.x} event.y:${event.y}`;
                log(`${textRef.current.text}`);
                stackRef.current.centerX = event.x;
                stackRef.current.centerY = event.y;
            }, onTouchUp: (event) => {
                textRef.current.text = `onTouchUp event.x:${event.x} event.y:${event.y}`;
                log(`${textRef.current.text}`);
            }, onTouchCancel: (event) => {
                log(`${textRef.current.text}`);
            } },
            jsx.createElement(Stack, { ref: stackRef, layoutConfig: layoutConfig().just(), backgroundColor: Color.RED, height: 100, width: 150 },
                jsx.createElement(Text, { layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center), ref: textRef, maxLines: 0, textColor: Color.WHITE }, "x: 0, y: 0")));
    }
};
GestureTSXDemo = __decorate([
    Entry
], GestureTSXDemo);
export { GestureTSXDemo };
//# sourceMappingURL=GestureTSXDemo.js.map