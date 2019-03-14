export interface Substance {
  id: number;
  name: string;
  moreUses: number;
  alphabet: number;
  products?: [
    {
      id: number;
      name: string;
      substance_id: number;
      quantity?: string;
      quantityAfter?: string;
      pesticides_id: number;
      pesticide_name: string;
      pesticide_type: string;
      firmName: string;
      manufacturersId: number;
      isActive: number;
    }
  ];

  // id: number;
  // name: string;
  // moreUses: number;
  // alphabet: number;
  // products?: [
  //   {
  //     id: number;
  //     name: string;
  //     substance_id: number;
  //     quantity?: string;
  //     quantityAfter?: string;
  //     pesticides_id: number;
  //     pesticide_name: string;
  //     pesticide_type: string;
  //     firmName: string;
  //     manufacturersId: number;
  //     isActive: number;
  //   }
  // ];
  // acaricides?: [
  //   {
  //     id: number;
  //     name: string;
  //     substance_id: number;
  //     quantity?: string;
  //     quantityAfter?: string;
  //     pesticides_id: number;
  //     pesticide_name: string;
  //     pesticide_type: string;
  //     firmName: string;
  //     manufacturersId: number;
  //     isActive: number;
  //   }
  // ];
  // nematocides?: [
  //   {
  //     id: number;
  //     name: string;
  //     substance_id: number;
  //     quantity?: string;
  //     quantityAfter?: string;
  //     pesticides_id: number;
  //     pesticide_name: string;
  //     pesticide_type: string;
  //     firmName: string;
  //     manufacturersId: number;
  //     isActive: number;
  //   }
  // ];
  // limatsides?: [
  //   {
  //     id: number;
  //     name: string;
  //     substance_id: number;
  //     quantity?: string;
  //     quantityAfter?: string;
  //     pesticides_id: number;
  //     pesticide_name: string;
  //     pesticide_type: string;
  //     firmName: string;
  //     manufacturersId: number;
  //     isActive: number;
  //   }
  // ];
}
