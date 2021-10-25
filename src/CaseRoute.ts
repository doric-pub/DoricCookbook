import { stack } from "doric";
/// Text
import * as Text_1 from "./components/Text_1"
import * as Text_2 from "./components/Text_2"
import * as Text_3 from "./components/Text_3"
import * as Text_4 from "./components/Text_4"
import * as Text_5 from "./components/Text_5"
/// Stack
import * as Stack_1 from "./components/Stack_1"
import * as Stack_2 from "./components/Stack_2"
import * as Stack_3 from "./components/Stack_3"
import * as Stack_4 from "./components/Stack_4"
/// Image
import * as Image_1 from "./components/Image_1"
import * as Image_2 from "./components/Image_2"
import * as Image_3 from "./components/Image_3"
/// HLayout
import * as HLayout_1 from "./components/HLayout_1"
import * as HLayout_2 from "./components/HLayout_2"
import * as HLayout_3 from "./components/HLayout_3"
/// VLayout
import * as VLayout_1 from "./components/VLayout_1"
import * as VLayout_2 from "./components/VLayout_2"
import * as VLayout_3 from "./components/VLayout_3"

export function caseUIorCode(path: string, needCode?: boolean) {
    switch (path) {
        case 'Text_1':
            return needCode ? Text_1.codeString() : Text_1.ui()
        case 'Text_2':
            return needCode ? Text_2.codeString() : Text_2.ui()
        case 'Text_3':
            return needCode ? Text_3.codeString() : Text_3.ui()
        case 'Text_4':
            return needCode ? Text_4.codeString() : Text_4.ui()
        case 'Text_5':
            return needCode ? Text_5.codeString() : Text_5.ui()
        case 'Stack_1':
            return needCode ? Stack_1.codeString() : Stack_1.ui()
        case 'Stack_2':
            return needCode ? Stack_2.codeString() : Stack_2.ui()
        case 'Stack_3':
            return needCode ? Stack_3.codeString() : Stack_3.ui()
        case 'Stack_4':
            return needCode ? Stack_4.codeString() : Stack_4.ui()
        case 'Image_1':
            return needCode ? Image_1.codeString() : Image_1.ui()
        case 'Image_2':
            return needCode ? Image_2.codeString() : Image_2.ui()
        case 'Image_3':
            return needCode ? Image_3.codeString() : Image_3.ui()
        case 'HLayout_1':
            return needCode ? HLayout_1.codeString() : HLayout_1.ui()
        case 'HLayout_2':
            return needCode ? HLayout_2.codeString() : HLayout_2.ui()
        case 'HLayout_3':
            return needCode ? HLayout_3.codeString() : HLayout_3.ui()
        case 'VLayout_1':
            return needCode ? VLayout_1.codeString() : VLayout_1.ui()
        case 'VLayout_2':
            return needCode ? VLayout_2.codeString() : VLayout_2.ui()
        case 'VLayout_3':
            return needCode ? VLayout_3.codeString() : VLayout_3.ui()
        default: return needCode ? '' : stack([])
    }
}