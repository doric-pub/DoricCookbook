import { Color, Gravity, Group, layoutConfig, navbar, Panel, text, scroller } from "doric";
import { CasesModel } from "./ComponentModel";
import * as CaseRoute from "./CaseRoute"

@Entry
export class CodeIDE extends Panel {

    private caseModel?: CasesModel

    onCreate() {
        if (this.getInitData()) {
            this.caseModel = this.getInitData() as CasesModel;
        }
    }

    onShow() {
        navbar(context).setTitle(this.caseModel?.title ?? '')
    }

    build(rootView: Group): void {
        rootView.backgroundColor = Color.BLACK
        let codeString =
            CaseRoute.caseUIorCode(this.caseModel?.ui ?? '', true) as string
        scroller(
            text({
                text: codeString,
                maxLines: 0,
                textColor: Color.safeParse('#47B19B'),
                textAlignment: Gravity.Left,
                backgroundColor: Color.BLACK,
                layoutConfig: layoutConfig().fit(),
            }),
            {
                layoutConfig: layoutConfig().most()
            }
        ).in(rootView)
    }
}
