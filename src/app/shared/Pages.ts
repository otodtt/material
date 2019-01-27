const pages = [
    {
        id: 0,
        name: 'начало',
        link: 'home',
        subPage: null
    },
    {
        id: 1,
        name: 'продукти',
        link: 'products',
        subPage: [
            {
                id: 0,
                pageId: 1,
                subName: 'Акарициди',
                link: 'products/acaricides'
            },
            {
                id: 1,
                pageId: 1,
                subName: 'Инсектициди',
                link: 'products/insecticides'
            }
        ]
    },
    {
        id: 2,
        name: 'култури',
        link: 'crops',
        subPage: null
    },
    {
        id: 3,
        name: 'полезно',
        link: 'practices',
        subPage: [
            {
                id: 0,
                pageId: 3,
                subName: 'добри растителнозащитни практики',
                link: 'practices'
            },
            {
                id: 1,
                pageId: 3,
                subName: 'BBCH - стадии на растеж',
                link: 'phases'
            },
            {
                id: 2,
                pageId: 3,
                subName: 'прагове на икономическа вредност',
                link: 'thresholds'
            },
            {
                id: 3,
                pageId: 3,
                subName: 'Формулации',
                link: 'formulations'
            },
            {
                id: 4,
                pageId: 3,
                subName: 'документи',
                link: 'documents'
            }
        ],
    },
    {
        id: 4,
        name: 'фирми',
        link: 'firms',
        subPage: null
    },
    {
        id: 5,
        name: 'контакти',
        link: 'contacts',
        subPage: null
    }
];

export default pages;
