var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Color, Gravity, layoutConfig, navbar, Panel, text, scroller } from "doric";
import * as CaseRoute from "./CaseRoute";
let CodeIDE = class CodeIDE extends Panel {
    onCreate() {
        if (this.getInitData()) {
            this.caseModel = this.getInitData();
        }
    }
    onShow() {
        var _a, _b;
        navbar(context).setTitle((_b = (_a = this.caseModel) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : '');
    }
    build(rootView) {
        var _a, _b;
        rootView.backgroundColor = Color.BLACK;
        let codeString = CaseRoute.caseUIorCode((_b = (_a = this.caseModel) === null || _a === void 0 ? void 0 : _a.ui) !== null && _b !== void 0 ? _b : '', true);
        scroller(text({
            text: codeString,
            maxLines: 0,
            textColor: Color.safeParse('#47B19B'),
            textAlignment: Gravity.Left,
            backgroundColor: Color.BLACK,
            layoutConfig: layoutConfig().fit(),
        }), {
            layoutConfig: layoutConfig().most()
        }).in(rootView);
    }
};
CodeIDE = __decorate([
    Entry
], CodeIDE);
export { CodeIDE };
//# sourceMappingURL=CodeIDE.js.map