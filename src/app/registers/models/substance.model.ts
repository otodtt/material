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
      pesticide_id: number;
      pesticide_name: string;
      pesticide_type: string;
      firmName: string;
      manufacturersId: number;
      isActive: number;
    }
  ];
}
