const pages = [
    {
        id: 0,
        name: 'правила',
        link: 'introduction',
        subPage: null
    },
    {
        id: 1,
        name: 'зърненожитни',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Пшеница',
                link: 'triticum-spp'
            },
            {
                id: 1,
                subName: 'Ечемик',
                link: 'hordeum-vulgare'
            },
            {
                id: 2,
                subName: 'Овес',
                link: 'avena-sativa'
            },
            {
                id: 3,
                subName: 'Ръж',
                link: 'secale-cereale'
            },
            {
                id: 4,
                subName: 'Царевица',
                link: 'zea-mays'
            },
            {
                id: 5,
                subName: 'Борба с гризачи',
                link: 'rodentia'
            },
        ],
    },
    {
        id: 2,
        name: 'бобови',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Фасул',
                link: 'phaseolus-vulgaris'
            },
            {
                id: 1,
                subName: 'Соя',
                link: 'glycine-max'
            },
            {
                id: 2,
                subName: 'Грах',
                link: 'pisum-sativum'
            },
            {
                id: 3,
                subName: 'Леща',
                link: 'lens-culinaris'
            },
            {
                id: 4,
                subName: 'Нахут',
                link: 'cicer-arietinum'
            },
            {
                id: 5,
                subName: 'Люцерна',
                link: 'medicago-sativa'
            },
        ],
    },
    {
        id: 3,
        name: 'технически култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Тютюн',
                link: 'nicotiana-tabacum'
            },
            {
                id: 1,
                subName: 'Цвекло',
                link: 'beta-vulgaris'
            },
            {
                id: 2,
                subName: 'Памук',
                link: 'gossypium'
            },
            {
                id: 3,
                subName: 'Слънчоглед',
                link: 'helianthus-annuus'
            },
            {
                id: 4,
                subName: 'Рапица',
                link: 'brassica-napus'
            },
            {
                id: 5,
                subName: 'Фъстъци',
                link: 'arachis-hypogaea'
            },
        ],
    },
    {
        id: 4,
        name: 'зеленчуци',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Домати, пипер, патладжан',
                link: '#'
            },
            {
                id: 1,
                subName: 'Картофи',
                link: '#'
            },
            {
                id: 2,
                subName: 'Лукви култури',
                link: '#'
            },
            {
                id: 3,
                subName: 'Зелеви култури',
                link: '#'
            },
            {
                id: 4,
                subName: 'Тиквови култури',
                link: '#'
            },
            {
                id: 5,
                subName: 'Листни зеленчуци',
                link: '#'
            },
        ],
    },
    {
        id: 5,
        name: 'зеленчуци в съоражения',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Домати в съоражения',
                link: '#'
            },
            {
                id: 1,
                subName: 'Тиквови култури',
                link: '#'
            },
            {
                id: 2,
                subName: 'Украсни култури',
                link: '#'
            },
            {
                id: 3,
                subName: 'Пипер в съоражения',
                link: '#'
            },
            {
                id: 4,
                subName: 'Листни зеленчуци',
                link: '#'
            }
        ],
    },
    {
        id: 6,
        name: 'овощни култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Семкови овощни видове',
                link: '#'
            },
            {
                id: 1,
                subName: 'Костилкови овощни видове',
                link: '#'
            }
        ],
    },
    {
        id: 7,
        name: 'ягодоплодни',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Ягода',
                link: '#'
            },
            {
                id: 1,
                subName: 'Малина',
                link: '#'
            },
            {
                id: 2,
                subName: 'Касис',
                link: '#'
            }
        ],
    },
    {
        id: 8,
        name: 'лоза',
        link: 'vine',
        subPage: null
    },
];

export default pages;
