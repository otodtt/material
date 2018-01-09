export interface Practice {
    id: number;
    linkId: string;
    name: string;
    text: string;
    fullName: string;
    images: {
        imgPath: string
        imgTitle: string
        thumbPath: string
        thumbAlt: string
        thumbTitle: string
        bgName: string
    };
    tablePiv?: string;
}
