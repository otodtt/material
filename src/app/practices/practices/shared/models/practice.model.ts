export class Practice {
    constructor(
        public id: number,
        public groupId: number,
        public cultureId: number,
        public linkId: string,
        public name: string,
        public text: string,
        public fullName: string,
        public imgPath?: string,
        public tablePiv?: string,
    ) {}
}
