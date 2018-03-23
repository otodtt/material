import { Component, OnInit } from '@angular/core';

import { ChangeBreadcrumbService } from '../common/services/changeBreadcrumb.service';
import { SeoService } from '../common/services/SeoService';

@Component({
      templateUrl: './formulations.component.html',
      styleUrls: ['./formulations.component.scss']
})
export class FormulationsComponent implements OnInit {
    headerId = 'aa-documents';

    private title = 'ПРЗ | Формулации';
    private description =   'Формулации. Списък на означения за използваните в Република Българя формулации';

    breadcrumbTitle = 'ФОРМУЛАЦИИ';
    breadcrumbName = 'Формулации';

    displayedColumns = ['position', 'name', 'latin', 'symbol'];
    dataSource = ELEMENT_DATA;

    constructor( private changeBreadcrumb: ChangeBreadcrumbService ) { }

    ngOnInit() {
        this.changeBreadcrumb.emitTitle(this.breadcrumbTitle);
        this.changeBreadcrumb.emitName(this.breadcrumbName);
        this.changeBreadcrumb.emitId(this.headerId);
    }
}

export interface Element {
    position: number;
    simbol: string;
    latin: string;
    name: string;
}

const ELEMENT_DATA: Element[] = [
    {position: 1, simbol: 'АБ', latin: 'AB', name: '- примамка - зърна'},
    {position: 2, simbol: 'АЕ', latin: 'AE', name: '- аерозол разпръскващ'},
    {position: 3, simbol: 'АЛ', latin: 'AL', name: '- други течности'},
    {position: 4, simbol: 'АП', latin: 'AP', name: '- други прахове'},
    {position: 5, simbol: 'ББ', latin: 'BB', name: '- примамка блок'},
    {position: 6, simbol: 'ВГ', latin: 'WG', name: '- вододиспергируеми гранули = ДФ = ВДГ'},
    {position: 7, simbol: 'ВП', latin: 'VP', name: '- продукт, отделящ пари'},
    {position: 8, simbol: 'ВП', latin: 'WP', name: '- намокрим прах = НП'},
    {position: 9, simbol: 'ВС', latin: 'WS', name: '- вододиспергируем прах за третиране на семена'},
    {position: 10, simbol: 'ВТ', latin: 'WT', name: '- вододиспегируеми таблети'},
    {position: 11, simbol: 'Г', latin: 'G', name: '- гранулат'},
    {position: 12, simbol: 'ГА', latin: 'GA', name: '- газ'},
    {position: 13, simbol: 'ГБ', latin: 'GB', name: '- гранулирана примамка'},
    {position: 14, simbol: 'ГВ', latin: 'GW', name: '- водоразтворим гел'},
    {position: 15, simbol: 'ГГ', latin: 'GG', name: '- макрогранули'},
    {position: 16, simbol: 'ГЕ', latin: 'GE', name: '- продукт, отделящ газ'},
    {position: 17, simbol: 'ГЛ', latin: 'GL', name: '- емулгируем гел'},
    {position: 18, simbol: 'ГР', latin: 'GR', name: '- гранули'},
    {position: 19, simbol: 'ГС', latin: 'GS', name: '- формулация за мазане'},
    {position: 20, simbol: 'ГФ', latin: 'GF', name: '- гел за третиране на семена'},
    {position: 21, simbol: 'ДК', latin: 'DC', name: '- дисперсионен концентрат'},
    {position: 22, simbol: 'ДП', latin: 'DP', name: '- прах за прашене = ПП'},
    {position: 23, simbol: 'ДС', latin: 'DS', name: '- прах за сухо третиране на семена'},
    {position: 24, simbol: 'ДТ', latin: 'DT', name: '- таблетки за пряка употреба'},
    {position: 25, simbol: 'Е', latin: 'Е', name: '- емулсия'},
    {position: 26, simbol: 'ЕВ', latin: 'EW', name: '- емулсия, масло във вода'},
    {position: 27, simbol: 'ЕГ', latin: 'EG', name: '- емулгируеми гранули'},
    {position: 28, simbol: 'ЕД', latin: 'ED', name: '- течност с ел. зареждане'},
    {position: 29, simbol: 'ЕК', latin: 'EC', name: '- емулсионен концентрат'},
    {position: 30, simbol: 'ЕО', latin: 'EO', name: '- емулсия, вода в масло'},
    {position: 31, simbol: 'ЕС', latin: 'ES', name: '- емулсия за третиране на семена'},
    {position: 32, simbol: 'ЗК', latin: 'ZC', name: '- смесена формулация от КС (CS) и СК (SC)'},
    {position: 33, simbol: 'ЗЕ', latin: 'ZE', name: '- смесена формулация от КС (CS) и СE (SE)'},
    {position: 34, simbol: 'ЗВ', latin: 'ZW', name: '- смесена формулация от КС (CS) и ЕВ (EW)'},
    {position: 35, simbol: 'КБ', latin: 'CB', name: '- концентрирана примамка'},
    {position: 36, simbol: 'КГ', latin: 'CG', name: '- капсулирани гранули'},
    {position: 37, simbol: 'КК', latin: 'KK', name: '- комбинирана опаковка - твърдо/течно'},
    {position: 38, simbol: 'КЛ', latin: 'CL', name: '- контактна течност или гел'},
    {position: 39, simbol: 'КТ', latin: 'KL', name: '- комбинирана опаковка - течно/течно'},
    {position: 40, simbol: 'КН', latin: 'KN', name: '- концентрат, отделящ мъгла на студено'},
    {position: 41, simbol: 'КП', latin: 'CP', name: '- контактен прах'},
    {position: 42, simbol: 'КО', latin: 'KP', name: '- комбинирана опаковка - твърдо/твърдо'},
    {position: 43, simbol: 'КС', latin: 'CS', name: '- суспензия капсули'},
    {position: 44, simbol: 'КФ', latin: 'CF', name: '- капсулирана суспензия за третиране на семена'},
    {position: 45, simbol: 'Л', latin: 'L', name: '- течност'},
    {position: 46, simbol: 'ЛА', latin: 'LA', name: '- лак'},
    {position: 47, simbol: 'ЛВ', latin: 'LW', name: '- формулация за малообемно третиране'},
    {position: 48, simbol: 'ЛС', latin: 'LS', name: '- разтвор за третиране на семена'},
    {position: 49, simbol: 'МГ', latin: 'MG', name: '- микрогранули'},
    {position: 50, simbol: 'МЕ', latin: 'ME', name: '- микроемулсия'},
    {position: 51, simbol: 'ОД', latin: 'ОD', name: '- маслена дисперсия'},
    {position: 52, simbol: 'ОЛ', latin: 'OL', name: '- течност, смесима с масло'},
    {position: 53, simbol: 'ОП', latin: 'OP', name: '- прах, диспергируем в масло'},
    {position: 54, simbol: 'ОФ', latin: 'OF', name: '- концентрирана суспензия, разтворима в масло'},
    {position: 55, simbol: 'ПА', latin: 'PA', name: '- паста'},
    {position: 56, simbol: 'ПБ', latin: 'PB', name: '- примамка на плочки'},
    {position: 57, simbol: 'ПК', latin: 'PC', name: '- концентрат гел или паста'},
    {position: 58, simbol: 'ПС', latin: 'PS', name: '- семена, покрити с пестицид'},
    {position: 59, simbol: 'РБ', latin: 'RB', name: '- примамка, готова за употреба'},
    {position: 60, simbol: 'СБ', latin: 'SB', name: '- примамка на парчета'},
    {position: 61, simbol: 'СВ', latin: 'CV', name: '- концентрат за приготвяне на примамки'},
    {position: 62, simbol: 'СГ', latin: 'SG', name: '- гранули, разтворими във вода'},
    {position: 63, simbol: 'СД', latin: 'SD', name: '- суспензионен концентрат за директна употреба'},
    {position: 64, simbol: 'СЕ', latin: 'SE', name: '- суспо-емулсия'},
    {position: 65, simbol: 'СК', latin: 'SC', name: '- суспензионен концентрат = Ф = ФЛ = ФЛО'},
    {position: 66, simbol: 'СЛ', latin: 'SL', name: '- разтворим концентрат = РК'},
    {position: 67, simbol: 'СП', latin: 'SP', name: '- прах, разтворим във вода = РП'},
    {position: 68, simbol: 'СС', latin: 'SS', name: '- водоразтворим прах за третиране на семена'},
    {position: 69, simbol: 'СТ', latin: 'ST', name: '- водоразтворими таблети'},
    {position: 70, simbol: 'СУ/УЛВ', latin: 'SU/ULV', name: '- суспензия за ултрамалообемно третиране'},
    {position: 71, simbol: 'ТБ', latin: 'TB', name: '- таблетки'},
    {position: 72, simbol: 'ТК', latin: 'TC', name: '- технически материал'},
    {position: 73, simbol: 'ТК', latin: 'TK', name: '- технически концентрат'},
    {position: 74, simbol: 'УЛ/УЛВ', latin: 'UL/ULV', name: '- течност за ултра малообемно третиране'},
    {position: 75, simbol: 'ФВ', latin: 'FW', name: '- пелети за фумигация'},
    {position: 76, simbol: 'ФГ', latin: 'FG', name: '- фини гранули'},
    {position: 77, simbol: 'ФД', latin: 'FD', name: '- кутия за обгазяване, димка'},
    {position: 78, simbol: 'ФК', latin: 'FK', name: '- свещи за фумигация'},
    {position: 79, simbol: 'ФП', latin: 'FP', name: '- патрон за фумигация'},
    {position: 80, simbol: 'ФР', latin: 'FR', name: '- пръчици за фумигация'},
    {position: 81, simbol: 'ФС', latin: 'FS', name: '- концентрирана суспензия за третиране на семена'},
    {position: 82, simbol: 'ФТ', latin: 'FT', name: '- таблетка за фумигация'},
    {position: 83, simbol: 'ФУ', latin: 'FU', name: '- генератор за фумигация'},
    {position: 84, simbol: 'ХН', latin: 'HN', name: '- концентрат, отделящ мъгла при нагряване'}
];
