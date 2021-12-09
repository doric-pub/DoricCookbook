var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Color, Gravity, layoutConfig, log, stack, text, ViewHolder, ViewModel, VMPanel } from "doric";
class CounterView extends ViewHolder {
    build(root) {
        log('CounterView build');
        stack([
            this.numberText = text({
                textSize: 36,
                fontStyle: 'bold',
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center).configMargin({ bottom: 60 })
            }),
            this.clickText = text({
                textSize: 26,
                text: 'click me!',
                layoutConfig: layoutConfig().fit().configAlignment(Gravity.Center),
            })
        ], {
            backgroundColor: Color.WHITE,
            layoutConfig: layoutConfig().most()
        }).in(root);
    }
}
class CounterVM extends ViewModel {
    onAttached(state, vh) {
        log(`onAttached state: ${state.count}`);
        vh.clickText.onClick = () => {
            Promise.resolve(this.getState().count).then(count => {
                Promise.resolve().then(() => {
                    this.updateState((state) => {
                        state.count = count + 1;
                    });
                });
            });
        };
    }
    onBind(state, vh) {
        log(`onBind state: ${state.count}`);
        vh.numberText.text = `${state.count}`;
    }
}
let CounterDemo = class CounterDemo extends VMPanel {
    constructor() {
        super(...arguments);
        this.countModel = {
            count: 0
        };
    }
    getState() {
        return this.countModel;
    }
    getViewHolderClass() {
        return CounterView;
    }
    getViewModelClass() {
        return CounterVM;
    }
};
CounterDemo = __decorate([
    Entry
], CounterDemo);
export { CounterDemo };
//# sourceMappingURL=CounterDemo.js.map