const pages = [
    {
        id: 0,
        name: 'избери',
        link: 'all',
        subPage: null
    },
    {
        id: 1,
        name: 'зърненожитни',
        link: null,
        subPage: [
            {
                id: 0,
                pageId: 1,
                subName: 'Пшеница',
                link: 'show/1'
            },
            {
                id: 1,
                pageId: 1,
                subName: 'Ечемик',
                link: 'show/2'
            },
            {
                id: 2,
                pageId: 1,
                subName: 'Овес',
                link: 'show/3'
            },
            {
                id: 3,
                pageId: 1,
                subName: 'Ръж',
                link: 'show/4'
            },
            {
                id: 4,
                pageId: 1,
                subName: 'Царевица',
                link: 'show/5'
            },
            {
                id: 5,
                pageId: 1,
                subName: 'Ориз',
                link: 'show/61'
            },
            {
                id: 6,
                pageId: 1,
                subName: 'Зърнено-житни',
                link: 'show/59'
            }
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
                link: 'bean'
            },
            {
                id: 1,
                subName: 'Бакла',
                link: 'faba-bean'
            },
            {
                id: 2,
                subName: 'Грах',
                link: 'pea'
            },
            {
                id: 3,
                subName: 'Соя',
                link: 'soybean'
            }
        ],
    },
    /** Няма я таблицата за фъстъци. Ако се намери ще я сложа */
    {
        id: 3,
        name: 'технически култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Слънчоглед',
                link: 'sunflower'
            },
            {
                id: 1,
                subName: 'Рапица',
                link: 'oilseed-rape'
            },
            {
                id: 2,
                subName: 'Цвекло',
                link: 'beet'
            },
            {
                id: 3,
                subName: 'Хмел',
                link: 'hop'
            },
            {
                id: 4,
                subName: 'Памук',
                link: 'cotton'
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
                subName: 'Картофи',
                link: 'potato'
            },
            {
                id: 1,
                subName: 'Домати, патладжан, пипер',
                link: 'solanaceous-fruits'
            },
            {
                id: 2,
                subName: 'Тиквови култури',
                link: 'cucurbits'
            },
            {
                id: 3,
                subName: 'Зелеви култури',
                link: 'brassica'
            },
            {
                id: 4,
                subName: 'Листни зеленчуци',
                link: 'leaf-vegetables'
            },
            {
                id: 5,
                subName: 'Други Зелеви',
                link: 'other-brassica'
            },
            {
                id: 6,
                subName: 'Коренови и стъблени',
                link: 'root-and-stem'
            },
            {
                id: 7,
                subName: 'Лукови култури',
                link: 'bulb-vegetables'
            }
        ],
    },
    {
        id: 5,
        name: 'овощни култури',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Семкови овощни видове',
                link: 'pome-fruit'
            },
            {
                id: 1,
                subName: 'Костилкови овощни видове',
                link: 'stone-fruit'
            }
        ],
    },
    {
        id: 6,
        name: 'ягодоплодни',
        link: null,
        subPage: [
            {
                id: 0,
                subName: 'Ягода',
                link: 'strawberry'
            },
            {
                id: 1,
                subName: 'Касис',
                link: 'currants'
            }
        ],
    },
    {
        id: 7,
        name: 'лоза',
        link: 'grapevine',
        subPage: null
    },
    {
        id: 8,
        name: 'цитруси',
        link: 'citrus',
        subPage: null
    },
    {
        id: 9,
        name: 'плевели',
        link: 'weed-species',
        subPage: null
    },
];

export default pages;
