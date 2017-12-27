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
                subName: 'Пшеница',
                link: 'triticum-spp'
            },
            {
                subName: 'Ечемик',
                link: 'hordeum-vulgare'
            },
            {
                subName: 'Овес',
                link: 'avena-sativa'
            },
            {
                subName: 'Ръж',
                link: 'secale-cereale'
            },
            {
                subName: 'Царевица',
                link: 'zea-mays'
            },
            {
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
                subName: 'Фасул',
                link: 'phaseolus-vulgaris'
            },
            {
                subName: 'Соя',
                link: 'glycine-max'
            },
            {
                subName: 'Грах',
                link: 'pisum-sativum'
            },
            {
                subName: 'Леща',
                link: 'lens-culinaris'
            },
            {
                subName: 'Нахут',
                link: 'cicer-arietinum'
            },
            {
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
                subName: 'Тютюн',
                link: 'nicotiana-tabacum'
            },
            {
                subName: 'Цвекло',
                link: 'beta-vulgaris'
            },
            {
                subName: 'Памук',
                link: 'gossypium'
            },
            {
                subName: 'Слънчоглед',
                link: 'helianthus-annuus'
            },
            {
                subName: 'Рапица',
                link: 'brassica-napus'
            },
            {
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
                subName: 'Домати, пипер, патладжан',
                link: '#'
            },
            {
                subName: 'Картофи',
                link: '#'
            },
            {
                subName: 'Лукви култури',
                link: '#'
            },
            {
                subName: 'Зелеви култури',
                link: '#'
            },
            {
                subName: 'Тиквови култури',
                link: '#'
            },
            {
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
                subName: 'Домати в съоражения',
                link: '#'
            },
            {
                subName: 'Тиквови култури',
                link: '#'
            },
            {
                subName: 'Украсни култури',
                link: '#'
            },
            {
                subName: 'Пипер в съоражения',
                link: '#'
            },
            {
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
                subName: 'Семкови овощни видове',
                link: '#'
            },
            {
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
                subName: 'Ягода',
                link: '#'
            },
            {
                subName: 'Малина',
                link: '#'
            },
            {
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
