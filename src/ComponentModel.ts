
// export class ComponentModel {
//     name!: string;
//     desc!: string;
//     constructor(){}
// }

interface CasesModel {
    title: string;
    code: string
    ui: string;
}

export interface ComponentModel {
    title: string;
    subTitle: string
    desc: string;
    cases: CasesModel[]
}