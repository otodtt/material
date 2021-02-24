export interface Substance {
  id: number;
  name: string;
  moreUses: number;
  alphabet: number;
  products?: [
    {
      id: number;
      name: string;
      substanceId: number;
      quantity?: string;
      quantityAfter?: string;
      pesticideId: number;
      pesticideName: string;
      pesticideType: string;
      firmName: string;
      manufacturersId: number;
      isActive: number;
    }
  ];
}
