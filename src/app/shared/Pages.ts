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
                subName: 'Акарициди',
                link: 'acaricides'
            },
            {
                id: 1,
                subName: 'Инсектициди',
                link: 'insecticides'
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
                subName: 'добри растителнозащитни практики',
                link: 'practices'
            },
            {
                id: 1,
                subName: 'интегрирано управление на вредители',
                link: 'management'
            },
            {
                id: 2,
                subName: 'прагове на икономическа вредност',
                link: 'thresholds'
            },
            {
                id: 3,
                subName: 'Формулации',
                link: 'formulations'
            }
        ],
    },
    {
        id: 4,
        name: 'документи',
        link: 'documents',
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
