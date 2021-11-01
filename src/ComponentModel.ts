
export interface CasesModel {
    title: string;
    desc: string;
    ui: string;
}

export interface ComponentModel {
    title: string;
    subTitle: string
    desc: string;
    cases: CasesModel[],
    path: string,
}