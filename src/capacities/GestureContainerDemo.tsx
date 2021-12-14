import { Color, createRef, GestureContainer, Gravity, Group, HLayout, jsx, layoutConfig, log, navbar, Panel, Stack, SwipeOrientation, text, Text } from "doric";

@Entry
export class GestureContainerDemo extends Panel {

    onShow() {
        navbar(context).setTitle('GestureContainerDemo')
    }

    build(rootView: Group): void {
        const textRef = createRef<Text>();
        const stackRef = createRef<Stack>();
        <GestureContainer parent={rootView} layoutConfig={layoutConfig().most()}
            onClick={() => {
                textRef.current.text = 'onClick'
                log('onClick')
            }}
            onDoubleTap={() => {
                textRef.current.text = 'onDoubleTap'
                log('onDoubleTap')
            }}
            onLongPress={() => {
                textRef.current.text = 'onLongPress'
                log('onLongPress')
            }}
            onPan={(dx: number, dy: number) => {
                textRef.current.text = `onPan dx:${dx} dy:${dy}`
                log(`${textRef.current.text}`)
            }}
            onPinch={(scale: number) => {
                textRef.current.text = `onPinch scale: ${scale}`
                log(`${textRef.current.text}`)
            }}
            onRotate={(dAngle: number) => {
                textRef.current.text = `onRotate dAngle: ${dAngle}`
                log(`${textRef.current.text}`)
            }}
            onSwipe={(orientation: SwipeOrientation) => {
                textRef.current.text = `onSwipe orientation: ${orientation}`
                log(`${textRef.current.text}`)
            }}
            onTouchDown={(event: {
                x: number;
                y: number;
            }) => {
                textRef.current.text = `onTouchDown event.x:${event.x} event.y:${event.y}`
                log(`${textRef.current.text}`)
                stackRef.current.centerX = event.x
                stackRef.current.centerY = event.y
            }}
            onTouchMove={(event: {
                x: number;
                y: number;
            }) => {
                textRef.current.text = `onTouchMove event.x:${event.x} event.y:${event.y}`
                log(`${textRef.current.text}`)
                stackRef.current.centerX = event.x
                stackRef.current.centerY = event.y
            }}
            onTouchUp={(event: {
                x: number;
                y: number;
            }) => {
                textRef.current.text = `onTouchUp event.x:${event.x} event.y:${event.y}`
                log(`${textRef.current.text}`)
            }}
            onTouchCancel={(event: {
                x: number;
                y: number;
            }) => {
                // textRef.current.text = `onTouchCancel event.x:${event.x} event.y:${event.y}`
                log(`${textRef.current.text}`)
            }}
        >
            <Stack
                ref={stackRef}
                layoutConfig={layoutConfig().just()}
                backgroundColor={Color.RED}
                height={100}
                width={150}>
                <Text
                    layoutConfig={layoutConfig().fit().configAlignment(Gravity.Center)}
                    ref={textRef}
                    maxLines={0}
                    textColor={Color.WHITE}>
                    x: 0, y: 0
                </Text>
            </Stack>
        </GestureContainer>
    }
}